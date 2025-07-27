import { mask } from "@/lib/core/mask"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TransactionHashTitle } from "./hash/title"
import { CopyText } from "../copy-text"

interface TransactionAddressProps extends React.HTMLAttributes<HTMLDivElement> {
    address: `0x${string}`
}

export function TransactionAddress({ address }: TransactionAddressProps) {
    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer hover:underline">
                <code>
                    {mask(address)}
                </code>
            </PopoverTrigger>
            <PopoverContent
                className="max-w-[264px] overflow-wrap bg-white ml-4 shadow-none rounded-lg"
            >
                <div className="flex items-center space-x-1 mb-2">
                    <TransactionHashTitle>Full Address</TransactionHashTitle>
                    <CopyText payload={address} />
                </div>
                <div className="wrap-break-word">
                    {address}
                </div>
            </PopoverContent>
        </Popover>
    )
}