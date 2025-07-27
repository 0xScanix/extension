import Identicon from "../identicon"
import { AddressHeader } from "./header"

interface AddressPageProps extends React.HTMLAttributes<HTMLDivElement> {
    address: `0x${string}`
}

export function AddressPage({ address }: AddressPageProps) {
    return (
        <div className="flex items-center my-2">
            <div className="flex gap-4 p-2">
                <Identicon seed={address} scale={9} borderRadius={999} />
                <AddressHeader address={address} />
            </div>
        </div>
    )
}