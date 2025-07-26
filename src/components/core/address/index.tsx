import { useCore } from "@/components/provider"
import Identicon from "../identicon"
import { AddressHeader } from "./header"
import { getNativeCurrency } from "@/lib/chains/currency"

interface AddressPageProps extends React.HTMLAttributes<HTMLDivElement> {
    address: `0x${string}`
}

export function AddressPage({ address }: AddressPageProps) {
    const { inputBalance, selectedChain } = useCore()

    return (
        <div className="flex items-center justify-between my-2">
            <div className="flex">
                <Identicon seed={address} scale={9} borderRadius={999} />
                <AddressHeader address={address} />
            </div>

            <div className="text-3xl">
                {inputBalance.toString()}
                {getNativeCurrency(selectedChain)}
            </div>
        </div>
    )
}