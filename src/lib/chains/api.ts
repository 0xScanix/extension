import { ChainID } from "./chain";

export const data: { [key: string]: string } = {
    [ChainID.ETHEREUM_MAINNET]: "https://eth.blockscout.com",
    [ChainID.ETHEREUM_SEPOLIA]: "https://eth-sepolia.blockscout.com",
    [ChainID.ETHEREUM_HOLESKY]: "https://eth-holesky.blockscout.com",
    [ChainID.ETHERLINK_MAINNET]: "https://explorer.etherlink.com",
    [ChainID.ETHERLINK_TESTNET]: "https://testnet.explorer.etherlink.com",
    [ChainID.REDSTONE_MAINNET]: "https://explorer.redstone.xyz",
}

export const getApi = (chainId: string): string =>
    data[chainId] || ""
