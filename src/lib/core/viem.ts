import { formatEther } from "viem"
import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'
import { getRPC } from "../chains/rpc"

export const getBalance = async (chain: string, address: `0x${string}`) => {
    const rpc = getRPC(chain)
    const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(rpc),
    })
    const balance = await publicClient.getBalance({
        address,
    })

    return balance
}

export const formatEtherFixedTo = (value: string, slice: number = 7) => {
    return formatEther(BigInt(value)).slice(0, slice)
}