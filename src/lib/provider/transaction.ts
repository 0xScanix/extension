import { useState } from "react"
import { TransactionResponse } from "../core/transaction"

export const useTransactionProvider = () => {
    const [transaction, setInternalTransaction] = useState<TransactionResponse | undefined>()

    return {
        transaction,
        setInternalTransaction,
    }
}