import { ChainID } from "@/lib/chains/chain";
import { RedstonePriceRequest } from "./redstone";

export const getCurrencyPrice = async (chainId: string) => {
    switch (chainId) {
        case ChainID.ETHERLINK_MAINNET:
        case ChainID.ETHERLINK_TESTNET:
            return new RedstonePriceRequest("XTZ")
        case ChainID.REDSTONE_MAINNET:
            return new RedstonePriceRequest("RED")
        case ChainID.ETHEREUM_MAINNET:
        case ChainID.ETHEREUM_SEPOLIA:
        case ChainID.ETHEREUM_HOLESKY:
        default:
            return new RedstonePriceRequest("ETH")
    }
}