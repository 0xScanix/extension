import { InternalTransaction } from "./InternalTransaction";

/**
 * 
 * @export
 * @interface GetTransactionInternalTxs200Response
 */
export interface GetAddressInternalTxs200Response {
    /**
     * 
     * @type {Array<InternalTransaction>}
     * @memberof GetTransactionInternalTxs200Response
     */
    items: Array<InternalTransaction>;
    /**
     * 
     * @type {object}
     * @memberof GetTransactionInternalTxs200Response
     */
    nextPageParams: object;
}