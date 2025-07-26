import { ApiRequest } from "./api";
import { GetCoinPrice200Requests } from "./api";
import { GetCoinPrice200Response } from "./models/GetCoinPrice200Response";

export interface RedStonePriceDataResponse {
    symbol: string;
    value: number;
    source: {
        [exchange: string]: number;
    };
    timestamp: number;
    providerPublicKey: string;
    permawebTx: string;
    version: string;
}

const getCoinPrice = async (symbol: string): Promise<RedStonePriceDataResponse> => {
    const response = await fetch(`https://api.redstone.finance/prices?forceInflux=true&interval=1&symbols=${symbol}`, {
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
    });

    const data = await response.json()
    const result: RedStonePriceDataResponse = data[symbol.toLocaleUpperCase()]

    return result
}

export class RedstonePriceRequest implements ApiRequest {
    symbol: string

    constructor(symbol: string) {
        this.symbol = symbol
    }

    async getCoinPrice(_: GetCoinPrice200Requests,): Promise<GetCoinPrice200Response> {
        const data = await getCoinPrice(this.symbol)
        const firstPrice = Object.values(data.source)[0];

        return {
            price: firstPrice.toString()
        };
    }

}