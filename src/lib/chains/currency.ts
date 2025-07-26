import { ChainID } from "./chain";

export const data: { [key: string]: string } = {
    [ChainID.ETHEREUM_MAINNET]: "ETH",
    [ChainID.ETHEREUM_SEPOLIA]: "ETH",
    [ChainID.ETHEREUM_HOLESKY]: "ETH",
    [ChainID.ETHERLINK_MAINNET]: "XTZ",
    [ChainID.ETHERLINK_TESTNET]: "XTZ",
    [ChainID.REDSTONE_MAINNET]: "RED",
}

export const getNativeCurrency = (chainId: string): string =>
    data[chainId] || ""
