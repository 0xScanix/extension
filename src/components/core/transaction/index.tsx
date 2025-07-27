import { TransactionResponse } from "@/lib/core/transaction"
import { ToFromAddress, ToFromLine } from "./to-from-address"
import { TransactionHR, TransactionSection } from "./section"
import { TransactionBadge } from "../transactions/badge"
import { explorerBlock, explorerTransaction } from "@/lib/chains/explorer"
import { useCore } from "@/components/provider"
import { formatTimestampToUTC } from "@/lib/core/mask"
import { formatEtherFixedTo } from "@/lib/core/viem"
import { formatGwei } from "viem"
import { TransactionHeader } from "./header"

interface TransactionPageProps extends React.HTMLAttributes<HTMLDivElement> {
    transaction: TransactionResponse
}

export function TransactionPage({ transaction }: TransactionPageProps) {
    const { selectedChain } = useCore()
    return (
        <>
            <TransactionHeader transaction={transaction} />
            <div className="p-2">
                <div className="grid grid-cols-12 space-y-2">
                    <TransactionSection title="Transaction Hash">
                        <a
                            className="hover:underline text-blue-600/100"
                            href={explorerTransaction(transaction.transaction.hash, selectedChain) as string}
                            target="_blank"
                        >
                            {transaction.transaction.hash}
                        </a>
                    </TransactionSection>

                    <TransactionSection title="Block">
                        <div className="flex flex-col">
                            {transaction.transaction.blockNumber &&
                                <a
                                    className="hover:underline text-blue-600/100"
                                    href={explorerBlock(transaction.transaction.blockNumber.toString(), selectedChain) as string}
                                    target="_blank"
                                >
                                    {transaction.transaction.blockNumber.toString()}
                                </a>}
                            {transaction.confirmations &&
                                <TransactionBadge className="wrap-break-word my-2">
                                    {`${transaction.confirmations.toString()} Block Confirmation`}
                                </TransactionBadge>}
                        </div>
                    </TransactionSection>

                    <TransactionSection title="Timestamp">
                        {transaction.block?.timestamp &&
                            <>
                                <div className="wrap-break-word">
                                    {formatTimestampToUTC(transaction.block.timestamp)}
                                </div>
                                <TransactionBadge className="wrap-break-word my-2">
                                    {`${transaction.block.timestamp.toString()}`}
                                </TransactionBadge>
                            </>
                        }
                    </TransactionSection>

                    <TransactionHR />

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

                    <TransactionHR />

                    <TransactionSection title="Value">
                        {transaction.transaction?.value &&
                            <div className="wrap-break-word">
                                {formatEtherFixedTo(transaction.transaction.value.toString(), 16)} ETH
                            </div>
                        }
                    </TransactionSection>

                    <TransactionSection title="Gas">
                        {transaction.receipt.gasUsed &&
                            <div className="wrap-break-word">
                                {formatGwei(transaction.receipt.gasUsed)} Gwei
                            </div>
                        }
                    </TransactionSection>

                    <TransactionSection title="Gas Price">
                        {transaction.receipt.effectiveGasPrice &&
                            <div className="wrap-break-word">
                                {formatGwei(transaction.receipt.effectiveGasPrice)} Gwei
                            </div>
                        }
                    </TransactionSection>

                    <TransactionSection title="Transaction Fee">
                        {transaction.receipt.gasUsed && transaction.receipt.effectiveGasPrice &&
                            <div className="wrap-break-word">
                                {formatEtherFixedTo((transaction.receipt.effectiveGasPrice * transaction.receipt.gasUsed).toString(), 16)} ETH
                            </div>
                        }
                    </TransactionSection>
                </div>
            </div>
        </>
    )
}