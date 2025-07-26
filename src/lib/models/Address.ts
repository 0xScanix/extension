/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    creator_address_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    creation_transaction_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    coin_balance?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    exchange_rate?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    implementation_address?: string;
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    blockNumber_balance_updated_at?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    implementation_name?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    is_contract?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    is_verified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    has_logs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    has_token_transfers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    has_tokens?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    has_validated_blocks?: boolean;
}
