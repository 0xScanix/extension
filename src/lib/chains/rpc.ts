import { ChainID } from "./chain"

export const data: { [key: string]: string } = {
    [ChainID.ETHEREUM_MAINNET]: "https://eth.drpc.org",
    [ChainID.ETHEREUM_HOLESKY]: "https://holesky.drpc.org",
    [ChainID.ETHERLINK_MAINNET]: "https://rpc.ankr.com/etherlink_mainnet",
    [ChainID.ETHERLINK_TESTNET]: "https://rpc.ankr.com/etherlink_testnet",
    [ChainID.REDSTONE_MAINNET]: "https://rpc.redstonechain.com",
}

export const getRPC = (chainId: string): string =>
    data[chainId] || ""
