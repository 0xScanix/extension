import { getApi } from "../chains/api";
import { Address } from "../models/Address";
import { GetAddressInternalTxs200Response } from "../models/GetAddressInternalTxs200Response";
import { ApiRequest, GetAddressInternalTxsRequest, GetAddressRequest } from "./api";

export class BlockscoutRequest implements ApiRequest {
    chainId: string

    constructor(chainId: string) {
        this.chainId = chainId
    }

    async getAddressInternalTxs(requestParameters: GetAddressInternalTxsRequest): Promise<GetAddressInternalTxs200Response> {
        const apiUrl = getApi(this.chainId)
        const response = await fetch(`${apiUrl}/api/v2/addresses/${requestParameters.addressHash}/transactions`, {
            "method": "GET",
        });

        const data = await response.json()
        return data
    }

    async getAddress(requestParameters: GetAddressRequest): Promise<Address> {
        const apiUrl = getApi(this.chainId)
        const response = await fetch(`${apiUrl}/api/v2/addresses/${requestParameters.addressHash}`, {
            "method": "GET",
        });

        const data = await response.json()
        return data
    }
}