import { dateTimeDifference, mask } from "@/lib/core/mask"
import { InternalTransaction } from "@/lib/models/InternalTransaction"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TransactionStatus } from './status'
import { formatEtherFixedTo } from '@/lib/core/viem'
import { TransactionBadge } from './badge'
import { getNativeCurrency } from '@/lib/chains/currency'
import { TransactionHashTitle } from "./hash/title"
import { CopyText } from "../copy-text"
import { useCore } from "@/components/provider"
import { explorerTransaction } from "@/lib/chains/explorer"
import { ExternalLink } from "lucide-react"

interface TransactionsCardProps extends React.HTMLAttributes<HTMLDivElement> {
    transaction: InternalTransaction
}

export function TransactionsCard({ className, transaction, ...props }: TransactionsCardProps) {
    const { selectedChain } = useCore()

    return (
        <div
            className={cn("relative text-sm", className)}
            {...props}
        >
            <div className="absolute top-0 right-0 p-2 text-xs">
                {dateTimeDifference(transaction.timestamp)}
            </div>

            <div className="flex items-center space-x-1">
                <Popover>
                    <PopoverTrigger
                        className="my-2 cursor-pointer hover:underline text-lg"
                    >
                        <code>
                            {mask(transaction.hash, 12)}
                        </code>
                    </PopoverTrigger>
                    <PopoverContent
                        side="top"
                        className="max-w-[264px] overflow-wrap bg-white ml-4"
                    >
                        <div className="flex items-center space-x-1">
                            <TransactionHashTitle>Transaction Hash</TransactionHashTitle>
                            <CopyText payload={transaction.hash} />
                        </div>
                        <div className="wrap-break-word">
                            <a
                                className="hover:underline text-blue"
                                href={explorerTransaction(transaction.hash, selectedChain) as string}
                                target="_blank"
                            >
                                {transaction.hash}
                                <ExternalLink className="h-3" />
                            </a>

                        </div>

                        <TransactionHashTitle>Transaction Fee</TransactionHashTitle>
                        <div>{formatEtherFixedTo(transaction.fee.value)}</div>

                        <TransactionHashTitle>Nonce</TransactionHashTitle>
                        <div>{transaction.nonce}</div>
                    </PopoverContent>
                </Popover>
                <TransactionStatus variant={transaction.result}>
                    {transaction.result}
                </TransactionStatus>
            </div>

            <div className="flex items-center space-x-1">
                <span className="text-secondary">From</span>
                <Popover>
                    <PopoverTrigger>
                        <code>
                            {mask(transaction.from?.hash)}
                        </code>
                    </PopoverTrigger>
                    <PopoverContent>{transaction.from?.hash}</PopoverContent>
                </Popover>
                <span className="text-secondary">To</span>
                <Popover>
                    <PopoverTrigger>
                        <code>
                            {mask(transaction.to?.hash)}
                        </code>
                    </PopoverTrigger>
                    <PopoverContent>{transaction.to?.hash}</PopoverContent>
                </Popover>
            </div>

            <div className="flex items-center space-x-1">
                <TransactionBadge>
                    {formatEtherFixedTo(transaction.value)} {getNativeCurrency(selectedChain)}
                </TransactionBadge>

                <TransactionBadge>
                    {transaction.block_number}
                </TransactionBadge>
            </div>
        </div>
    )
}