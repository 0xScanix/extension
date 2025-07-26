import Identicon from "../identicon"
import { mask } from "@/lib/core/mask"
import { CopyText } from "../copy-text"

interface ToFromAddressProps extends React.HTMLAttributes<HTMLDivElement> {
    address: `0x${string}`
    prefix?: string
}

export function ToFromAddress({ address, prefix }: ToFromAddressProps) {
    return (
        <>
            <div className="col-span-2">
                <div className="flex items-center justify-center">
                    <Identicon seed={address} scale={5} borderRadius={999} />
                </div>
            </div>
            <div className="col-span-10">
                <div className="flex flex-row items-center">
                    <div>{`${prefix ? prefix + ' ' : ''}${mask(address)}`}</div>
                    <CopyText payload={address} />
                </div>
            </div>
        </>
    )
}

export const ToFromLine = () => {
    return (
        <>
            <div className="col-span-2">
                <div className="flex items-center justify-center py-3">
                    <div className="h-4 border-l border-gray-400 dark:border-gray-800" />
                </div>
            </div>
            <div className="col-span-10">
            </div>
        </>
    )
}