import { createPublicClient, http, Transaction } from "viem"
import { getRPC } from "../chains/rpc"

export interface TransactionResponse {
    transaction: Transaction
    confirmations: bigint
}

export class TransactionRequest {
    chainId: string

    constructor(chainId: string) {
        this.chainId = chainId
    }

    async getTransaction(hash: `0x${string}`): Promise<TransactionResponse> {
        const rpc = getRPC(this.chainId)
        const publicClient = createPublicClient({
            transport: http(rpc),
        })

        const transaction = await publicClient.getTransaction({
            hash,
        })

        const confirmations = await publicClient.getTransactionConfirmations({
            hash,
        })

        return {
            transaction,
            confirmations,
        }
    }
}