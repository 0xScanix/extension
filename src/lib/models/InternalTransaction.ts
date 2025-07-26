import { AddressParam } from "./AddressParam";

/**
 * 
 * @export
 * @interface InternalTransaction
 */
export interface InternalTransaction {
    /**
     * 
     * @type {number}
     * @memberof InternalTransaction
     */
    // API is block_number
    block_number: number;
    /**
     * 
     * @type {AddressParam}
     * @memberof InternalTransaction
     */
    created_contract: AddressParam;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    error: string;
    /**
     * 
     * @type {AddressParam}
     * @memberof InternalTransaction
     */
    from: AddressParam;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    gas_limit: string;
    /**
     * 
     * @type {number}
     * @memberof InternalTransaction
     */
    index: number;
    /**
     * 
     * @type {boolean}
     * @memberof InternalTransaction
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    timestamp: string;
    /**
     * 
     * @type {AddressParam}
     * @memberof InternalTransaction
     */
    to: AddressParam;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof InternalTransaction
     */
    result: any;
    /**
     * 
     * @type {object}
     * @memberof InternalTransaction
     */
    fee: {
        type: string
        value: string
    };
    /**
     * 
     * @type {number}
     * @memberof InternalTransaction
     */
    nonce: number

}