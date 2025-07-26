import { ChainID } from "@/lib/chains/chain";
import { BlockscoutRequest } from "../blockscout";

export const getExplorerRequest = async (chainId: string) => {
    switch (chainId) {
        case ChainID.ETHEREUM_MAINNET:
        case ChainID.ETHEREUM_SEPOLIA:
        case ChainID.ETHEREUM_HOLESKY:
        case ChainID.ETHERLINK_MAINNET:
        case ChainID.ETHERLINK_TESTNET:
        case ChainID.REDSTONE_MAINNET:
            return new BlockscoutRequest(chainId)
        default:
            return new BlockscoutRequest(ChainID.ETHEREUM_MAINNET)
    }
}