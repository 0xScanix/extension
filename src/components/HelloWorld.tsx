import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import ChainSelector from './core/chain-selector'
import { isAddress, isHash } from 'viem'
import { AddressPage } from './core/address'
import { getExplorerRequest } from '@/lib/apis/explorer'
import { ErrorSection } from './core/error-section'
import { Settings } from './core/settings'
import { TransactionRequest } from '@/lib/core/transaction'
import { TransactionsCard } from './core/transactions'
import { useCore } from './provider'
import { TransactionPage } from './core/transaction'

export default function HelloWorld() {
  const {
    transactions,
    setTransactions,
    input,
    setInput,
    selectedChain,
    transaction,
    setTransaction
  } = useCore()

  const [enteredValue, setEnteredValue] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    chrome.storage.local.get('selectedText', (result) => {
      if (result.selectedText) {
        setInput(result.selectedText)
      } else {
        setInput('')
      }
    })

    const onChangeListener = (changes: Record<string, chrome.storage.StorageChange>) => {
      if (changes.selectedText) {
        setInput(changes.selectedText.newValue || '')
      }
    }

    chrome.storage.onChanged.addListener(onChangeListener)

    // Cleanup listener on unmount
    return () => {
      chrome.storage.onChanged.removeListener(onChangeListener)
    }
  }, [])

  const onSearch = async (input: string) => {
    try {
      setIsLoading(true)
      setError('')
      setEnteredValue('')
      await handleSearch(input)
      setEnteredValue(input)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
        console.error(e.message)
      } else {
        console.error("Unknown error", e)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = async (input: string) => {
    const isInputAddress = isAddress(input)

    // await getEthPrice()
    if (isInputAddress) {
      const explorer = await getExplorerRequest(selectedChain)
      const data = await explorer.getAddressInternalTxs({ addressHash: input })
      setTransactions(data)
      return;
    }

    const isInputHash = isHash(input)
    if (isInputHash) {
      const client = new TransactionRequest(selectedChain)

      const transaction = await client.getTransaction(input)
      console.log(transaction)
      setTransaction(transaction)

      return;
    }

    throw Error("Invalid input")
  }

  return (
    <div style={{ padding: '10px' }}>
      <div className="flex items-center justify-between">
        <Input
          className="bg-surface text-surface-foreground/60"
          type="text" value={input} placeholder='Address, Transaction ...'
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => onSearch(input)} disabled={isLoading}>Seach</Button>
        <ChainSelector />
        <Settings />
      </div>

      {error
        ? <ErrorSection message={error} />
        : <div>
          {isAddress(enteredValue) &&
            <>
              <AddressPage address={enteredValue} />

              {transactions &&
                <div>
                  {transactions.items.length > 0
                    ? <>
                      {transactions.items.map((transaction) => {
                        return (
                          <TransactionsCard key={transaction.hash} transaction={transaction} />
                        )
                      })}
                    </>
                    : <div>No Transaction Hsitory</div>
                  }
                </div>
              }
            </>
          }

          {isHash(enteredValue) && transaction &&
            <TransactionPage transaction={transaction} />}
        </div>
      }
    </div >
  )
}
