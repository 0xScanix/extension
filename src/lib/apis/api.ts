import { Address } from "../models/Address";
import { GetAddressInternalTxs200Response } from "../models/GetAddressInternalTxs200Response";

export interface GetAddressInternalTxsRequest {
    addressHash: string;
    filter?: string;
}

export interface GetAddressRequest {
    addressHash: string;
}

export interface ApiRequest {
    /**
     * get address internal transactions
     */
    getAddressInternalTxs(requestParameters: GetAddressInternalTxsRequest): Promise<GetAddressInternalTxs200Response>;

    /**
     * get address info
     */
    getAddress(requestParameters: GetAddressRequest): Promise<Address>;
}