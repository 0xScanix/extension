import { ChainID } from "./chain";

export enum Explorer {
    ETHERSCAN = "etherscan",
    BLOCKSCOUT = "blockscout",
    ROUTESCAN = "routescan",
}

export const data: { [key: string]: string | { [key: string]: string } } = {
    [ChainID.ETHEREUM_MAINNET]: {
        [Explorer.ETHERSCAN]: "https://etherscan.io",
        [Explorer.BLOCKSCOUT]: "https://eth.blockscout.com",
        [Explorer.ROUTESCAN]: "https://1.routescan.io",
    },
    [ChainID.ETHEREUM_HOLESKY]: {
        [Explorer.ETHERSCAN]: "https://etherscan.io",
    },
    [ChainID.ETHERLINK_MAINNET]: {
        [Explorer.BLOCKSCOUT]: "https://explorer.etherlink.com",
    },
    [ChainID.ETHERLINK_TESTNET]: {
        [Explorer.BLOCKSCOUT]: "https://testnet.explorer.etherlink.com",
    },
    [ChainID.REDSTONE_MAINNET]: {
        [Explorer.BLOCKSCOUT]: "https://explorer.redstone.xyz",
    },
}

export const explorerAddress = (
    address: string,
    chainId: string = ChainID.ETHEREUM_MAINNET,
    explorer: Explorer = Explorer.BLOCKSCOUT
): string | null => {
    const chainData = data[chainId];
    if (!chainData || typeof chainData !== "object") return "";

    const baseUrl = chainData[explorer];
    if (!baseUrl) return null;

    return `${baseUrl}/address/${address}`;
};

export const explorerTransaction = (
    address: string,
    chainId: string = ChainID.ETHEREUM_MAINNET,
    explorer: Explorer = Explorer.BLOCKSCOUT
): string | null => {
    const chainData = data[chainId];
    if (!chainData || typeof chainData !== "object") return "";

    const baseUrl = chainData[explorer];
    if (!baseUrl) return "";

    return `${baseUrl}/tx/${address}`;
};

export const explorerBlock = (
    address: string,
    chainId: string = ChainID.ETHEREUM_MAINNET,
    explorer: Explorer = Explorer.BLOCKSCOUT
): string | null => {
    const chainData = data[chainId];
    if (!chainData || typeof chainData !== "object") return "";

    const baseUrl = chainData[explorer];
    if (!baseUrl) return "";

    return `${baseUrl}/block/${address}`;
};

export const getAllAvailableExplorer = (
    chainId: string = ChainID.ETHEREUM_MAINNET
): Explorer[] => {
    const chainData = data[chainId];

    if (!chainData || typeof chainData !== 'object') {
        return [];
    }

    return Object.keys(chainData) as Explorer[];
};