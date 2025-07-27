import { getExplorerRequest } from "@/lib/apis/explorer"
import { ChainID } from "@/lib/chains/chain"
import { TransactionResponse } from "@/lib/core/transaction"
import { getBalance } from "@/lib/core/viem"
import { Address } from "@/lib/models/Address"
import { GetAddressInternalTxs200Response } from "@/lib/models/GetAddressInternalTxs200Response"
import { useTransactionProvider } from "@/lib/provider/transaction"
import { createContext, useContext, useEffect, useState } from "react"
import { isAddress } from "viem"

type CoreProviderProps = {
    children: React.ReactNode
}

type CoreProviderState = {
    input: string
    setInput: (theme: string) => void
    selectedChain: ChainID
    setSelectedChain: (theme: ChainID) => void

    inputBalance: bigint
    transactions: GetAddressInternalTxs200Response | undefined,
    setTransactions: (theme: GetAddressInternalTxs200Response | undefined) => void
    resetState: () => void

    transaction: TransactionResponse | undefined,
    setTransaction: (theme: TransactionResponse | undefined) => void
}

const initialState: CoreProviderState = {
    input: "",
    setInput: (_: string) => null,
    selectedChain: ChainID.ETHEREUM_MAINNET,
    setSelectedChain: (_: ChainID) => null,

    inputBalance: BigInt(0),
    transactions: undefined,
    setTransactions: (_: GetAddressInternalTxs200Response | undefined) => null,
    resetState: () => null,

    transaction: undefined,
    setTransaction: (_: TransactionResponse | undefined) => null,
}

const CoreProviderContext = createContext<CoreProviderState>(initialState)

const CHROME_STORAGE_LOCAL_TRANSACTIONS = "transactions"
const CHROME_STORAGE_LOCAL_SELETED_CHAIN = "selectedChain"

export function CoreProvider({
    children,
    ...props
}: CoreProviderProps) {
    const [selectedChain, setInternalSelectedChain] = useState<ChainID>(ChainID.ETHEREUM_MAINNET)
    const [input, setInput] = useState("")

    const transactionProvider = useTransactionProvider()

    const [inputBalance, setInputBalance] = useState(BigInt(0))
    const [transactions, setInternalTransactions] = useState<GetAddressInternalTxs200Response | undefined>()
    const [_, setInternalAddressInfo] = useState<Address | undefined>()

    const setTransactions = (transactions: GetAddressInternalTxs200Response | undefined) => {
        setInternalTransactions(transactions)

        if (transactions) {
            chrome.storage.local.set({ [CHROME_STORAGE_LOCAL_TRANSACTIONS]: JSON.stringify(transactions) })
        } else {
            chrome.storage.local.remove(CHROME_STORAGE_LOCAL_TRANSACTIONS)
        }
    }

    const getAddressInfo = async (selectedChain: string, input: string) => {
        const addressInfoKey = `${selectedChain}_${input}`

        const cache = await getFromStorage(addressInfoKey)
        if (cache && Object.keys(cache).length > 0) {
            console.log('Getting from cache')
            const info = JSON.parse(cache)
            setInternalAddressInfo(info)
            return;
        }

        const explorer = await getExplorerRequest(selectedChain)
        const info = await explorer.getAddress({ addressHash: input })
        setInternalAddressInfo(info)

        if (info) {
            chrome.storage.local.set({ [addressInfoKey]: JSON.stringify(info) })
        }
    }

    const getFromStorage = (key: string): Promise<any> =>
        new Promise((resolve) => {
            chrome.storage.local.get(key, (result) => { console.log(result); resolve(result[key]); });
        });

    const setSelectedChain = (chainId: ChainID) => {
        setInternalSelectedChain(chainId)
        chrome.storage.local.set({ [CHROME_STORAGE_LOCAL_SELETED_CHAIN]: chainId })
    }

    const setTransaction = (transactions: TransactionResponse | undefined) => {
        transactionProvider.setInternalTransaction(transactions)
    }

    // When chain is changed, get information from new chains
    useEffect(() => {
        (async () => {
            console.log("Switching Chains...")
            const isInputAddress = isAddress(input)

            if (isInputAddress) {
                await getAddressInfo(selectedChain, input)

                const explorer = await getExplorerRequest(selectedChain)

                const transactions = await explorer.getAddressInternalTxs({ addressHash: input })
                setTransactions(transactions)
                return;
            }
        })()
    }, [selectedChain])

    useEffect(() => {
        (async () => {
            const bal = await getBalance(selectedChain, input as `0x${string}`)
            setInputBalance(bal)
        })()
    }, [transactions])

    useEffect(() => {
        chrome.storage.local.get([CHROME_STORAGE_LOCAL_TRANSACTIONS], ({ transactions }) => {
            setInternalTransactions(JSON.parse(transactions))
        })

        chrome.storage.local.get([CHROME_STORAGE_LOCAL_SELETED_CHAIN], ({ selectedChain }) => {
            setInternalSelectedChain(selectedChain)
        })
    }, [])

    const resetState = () => {
        setTransactions(undefined)
    }

    const value = {
        selectedChain,
        setSelectedChain,
        input,
        setInput,

        inputBalance,
        transactions,
        setTransactions,

        resetState,

        transaction: transactionProvider.transaction,
        setTransaction
    }

    return (
        <CoreProviderContext.Provider {...props} value={value}>
            {children}
        </CoreProviderContext.Provider>
    )
}

export const useCore = () => {
    const context = useContext(CoreProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}