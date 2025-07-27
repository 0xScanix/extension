import { TransactionExplorer } from "./explorer"
import { mask } from "@/lib/core/mask"
import { TransactionResponse } from "@/lib/core/transaction"

interface TransactionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    transaction: TransactionResponse
}

export function TransactionHeader({ transaction }: TransactionHeaderProps) {
    return (
        <div className="flex items-center my-2">
            <div className="flex gap-4 p-2">

                <h2 className="text-xl word-break">
                    {mask(transaction.transaction.hash, 12)}
                </h2>
                <TransactionExplorer hash={transaction.transaction.hash} />
            </div>
        </div>
    )
}