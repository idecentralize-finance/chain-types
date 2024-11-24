import {ChainType, Logo} from '../types';
import {
    evmLogoData,
    solanaLogoData,
    polygonLogoData,
    optimismLogoData,
    arbitrumLogoData,
    binanceLogoData,
} from './logos.tsx';

// Define constants for mainnet and testnet IDs
// https://chainlist.org/
export const ethereumNetworkId = 1 as const;
export const sepoliaTestnetId = 11155111 as const;
export const solanaNetworkId = 101 as const;
export const solanaTestnetId = 102 as const;
export const polygonNetworkId = 137 as const;
export const amoyTestnetId = 80002 as const;
export const optimismNetworkId = 10 as const;
export const arbitrumNetworkId = 42161 as const;
export const binanceNetworkId = 56 as const;
export const baseNetworkId = 8453 as const;

// Use the constants to define the types
export type EthereumNetwork = typeof ethereumNetworkId;
export type SolanaNetwork = typeof solanaNetworkId;
export type PolygonNetwork = typeof polygonNetworkId;
export type OptimismNetwork = typeof optimismNetworkId;
export type ArbitrumNetwork = typeof arbitrumNetworkId;
export type SepoliaTestnet = typeof sepoliaTestnetId;
export type solanaTestnet = typeof solanaTestnetId;
export type PolygonTestnet = typeof amoyTestnetId;
export type BinanceNetwork = typeof binanceNetworkId;
export type BaseNetwork = typeof baseNetworkId;

export type ValidNetworkType =
    | EthereumNetwork
    | SolanaNetwork
    | PolygonNetwork
    | OptimismNetwork
    | ArbitrumNetwork
    | SepoliaTestnet
    | solanaTestnet
    | PolygonTestnet
    | BinanceNetwork
    | BaseNetwork;

// Define the network types
export interface NetworkType extends ChainType {
    name: string;
    networkId: ValidNetworkType;
    isTestnet: boolean;
    logo: Logo;
    disconnect?: () => void;
}

// Define networkTypes using numeric keys
export const networkTypes: Record<ValidNetworkType, NetworkType> = {
    // Ethereum
    [ethereumNetworkId]: {
        name: 'Ethereum',
        logo: evmLogoData,
        networkId: ethereumNetworkId,
        isTestnet: false,
    },
    [sepoliaTestnetId]: {
        name: 'Ethereum Sepolia',
        logo: evmLogoData,
        networkId: sepoliaTestnetId,
        isTestnet: true,
    },
    // Solana
    [solanaNetworkId]: {
        name: 'Solana',
        logo: solanaLogoData,
        networkId: solanaNetworkId,
        isTestnet: false,
    },
    [solanaTestnetId]: {
        name: 'Solana Testnet',
        logo: solanaLogoData,
        networkId: solanaTestnetId,
        isTestnet: true,
    },

    // Polygon
    [polygonNetworkId]: {
        name: 'Polygon',
        logo: polygonLogoData,
        networkId: polygonNetworkId,
        isTestnet: false,
    },
    [amoyTestnetId]: {
        name: 'Polygon Amoy Testnet',
        logo: polygonLogoData,
        networkId: amoyTestnetId,
        isTestnet: true,
    },
    // Optimism
    [optimismNetworkId]: {
        name: 'Optimism',
        logo: optimismLogoData,
        networkId: optimismNetworkId,
        isTestnet: false,
    },
    // Arbitrum
    [arbitrumNetworkId]: {
        name: 'Arbitrum',
        logo: arbitrumLogoData,
        networkId: arbitrumNetworkId,
        isTestnet: false,
    },
    // Binance Smart Chain
    [binanceNetworkId]: {
        name: 'Binance Smart Chain',
        logo: binanceLogoData,
        networkId: binanceNetworkId,
        isTestnet: false,
    },
    // Base Network
    [baseNetworkId]: {
        name: 'Base Network',
        logo: evmLogoData,
        networkId: baseNetworkId,
        isTestnet: false,
    },
};
