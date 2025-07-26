import { useCore } from "@/components/provider";
import { Explorer, explorerTransaction, getAllAvailableExplorer } from "@/lib/chains/explorer";
import { mask } from "@/lib/core/mask";
import { useEffect, useState } from "react";

interface AddressExplorerItem {
    explorer: Explorer
    url: string
}

interface TransactionExplorerProps extends React.HTMLAttributes<HTMLDivElement> {
    hash: `0x${string}`
}

export function TransactionExplorer({ hash }: TransactionExplorerProps) {
    const { selectedChain } = useCore()
    const [explorers, setExplorers] = useState<AddressExplorerItem[]>([])

    useEffect(() => {
        const explorers = generateExplorer(selectedChain)
        setExplorers(explorers)
    }, [selectedChain])

    const generateExplorer = (chainId: string): AddressExplorerItem[] => {
        const explorers = getAllAvailableExplorer(chainId)

        return explorers
            .map((explorer) => ({
                explorer,
                url: explorerTransaction(hash, chainId, explorer) as string
            }))
            .filter((x) => x.url !== null);
    }

    return (
        <div>
            <h2 className="text-xl word-break">
                {mask(hash, 12)}
            </h2>

            <div className="flex items-center gap-2">
                {explorers.map((value) => {
                    return (
                        <a key={value.explorer}
                            href={value.url}
                            target="_blank"
                            className="flex items-center gap-2 shrink-0 size-4">
                            <img src={`/explorers/${value.explorer}.svg`} />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}