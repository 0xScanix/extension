import { TransactionResponse } from "@/lib/core/transaction"
import { TransactionHashTitle } from "../transactions/hash/title"
import { TransactionExplorer } from "./explorer"
import Identicon from "../identicon"
import { mask } from "@/lib/core/mask"
import { CopyText } from "../copy-text"
import { ToFromAddress, ToFromLine } from "./to-from-address"
import { TransactionSection } from "./section"

interface TransactionPageProps extends React.HTMLAttributes<HTMLDivElement> {
    transaction: TransactionResponse
}

export function TransactionPage({ transaction }: TransactionPageProps) {
    return (
        <>
            <div>
                View on Explorer:
                <TransactionExplorer hash={transaction.transaction.hash} />
            </div>
            <div className="p-2">
                <div className="grid grid-cols-12">
                    <TransactionSection title="Transaction Hash">
                        {transaction.transaction.hash}
                    </TransactionSection>

                    <TransactionSection title="Block">
                        {transaction.transaction.blockNumber &&
                            <div className="wrap-break-word">
                                {transaction.transaction.blockNumber.toString()}
                            </div>}
                        {transaction.confirmations &&
                            <div className="wrap-break-word">
                                {`${transaction.confirmations.toString()} Block Confirmation`}
                            </div>}
                    </TransactionSection>

                    <div className="col-span-7 sm:col-span-12 overflow-wrap">
                        <div className="wrap-break-word">
                            {transaction.transaction.maxFeePerGas?.toString()}
                        </div>
                    </div>

                    <div className="col-span-7 sm:col-span-12 overflow-wrap">
                        <div className="wrap-break-word">
                            {transaction.transaction.value?.toString()}
                        </div>
                    </div>

                    <div className="col-span-7 sm:col-span-12 overflow-wrap">
                        <div className="wrap-break-word">
                            {transaction.transaction.value?.toString()}
                        </div>
                    </div>

                    <div className="col-span-7 sm:col-span-12 overflow-wrap">
                        <div className="wrap-break-word">
                            {transaction.transaction.value?.toString()}
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="grid grid-cols-12 text-base">
                            {transaction.transaction.from &&
                                <ToFromAddress address={transaction.transaction.from} />}

                            {transaction.transaction.to &&
                                <>
                                    <ToFromLine />
                                    <ToFromAddress address={transaction.transaction.to} prefix="to" />
                                </>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}