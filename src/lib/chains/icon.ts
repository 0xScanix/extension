import { ChainID } from "./chain"

export const getIconByChainId = (chainId: string): string =>
    `https://raw.githubusercontent.com/solide-project/icons/master/crypto/${getIcon(chainId)}`

const getIcon = (chainId: string): string => {
    switch (chainId) {
        case ChainID.ETHERLINK_MAINNET:
        case ChainID.ETHERLINK_TESTNET:
            return "etherlink.svg"
        case ChainID.REDSTONE_MAINNET:
            return "redstone.svg"
        case ChainID.ETHEREUM_MAINNET:
        case ChainID.ETHEREUM_SEPOLIA:
        case ChainID.ETHEREUM_HOLESKY:
        default:
            return "eth.svg"
    }
}