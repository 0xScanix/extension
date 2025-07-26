import { GetCoinPrice200Response } from "./models/GetCoinPrice200Response";

export interface GetCoinPrice200Requests {
    symbol: string
}

export interface ApiRequest {
    /**
     * get current price of coin
     */
    getCoinPrice(requestParameters: GetCoinPrice200Requests,): Promise<GetCoinPrice200Response>;
}