import { Block, createPublicClient, http, Transaction, TransactionReceipt } from "viem"
import { getRPC } from "../chains/rpc"

export interface TransactionResponse {
    transaction: Transaction
    confirmations: bigint
    block: Block
    receipt: TransactionReceipt
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

        const transaction = await publicClient.getTransaction({ hash })
        const receipt = await publicClient.getTransactionReceipt({ hash });

        const block = await publicClient.getBlock({
            blockNumber: transaction.blockNumber,
        });

        const confirmations = await publicClient.getTransactionConfirmations({
            hash,
        })

        return {
            transaction,
            receipt,
            confirmations,
            block,
        }
    }
}