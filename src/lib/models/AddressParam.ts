/**
 * 
 * @export
 * @interface AddressParam
 */
export interface AddressParam {
    /**
     * 
     * @type {string}
     * @memberof AddressParam
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof AddressParam
     */
    implementationName: string;
    /**
     * 
     * @type {string}
     * @memberof AddressParam
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AddressParam
     */
    ensDomainName?: string;
    /**
     * 
     * @type {object}
     * @memberof AddressParam
     */
    metadata?: object;
    /**
     * 
     * @type {boolean}
     * @memberof AddressParam
     */
    isContract: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressParam
     */
    isVerified: boolean;
}