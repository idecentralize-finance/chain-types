import { ChainType, Logo } from '../types';
export declare const ethereumNetworkId: 1;
export declare const sepoliaTestnetId: 11155111;
export declare const solanaNetworkId: 101;
export declare const solanaTestnetId: 102;
export declare const polygonNetworkId: 137;
export declare const amoyTestnetId: 80002;
export declare const optimismNetworkId: 10;
export declare const arbitrumNetworkId: 42161;
export declare const binanceNetworkId: 56;
export declare const baseNetworkId: 8453;
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
export type ValidNetworkType = EthereumNetwork | SolanaNetwork | PolygonNetwork | OptimismNetwork | ArbitrumNetwork | SepoliaTestnet | solanaTestnet | PolygonTestnet | BinanceNetwork | BaseNetwork;
export interface NetworkType extends ChainType {
    name: string;
    networkId: ValidNetworkType;
    isTestnet: boolean;
    logo: Logo;
    disconnect?: () => void;
}
export declare const networkTypes: Record<ValidNetworkType, NetworkType>;
//# sourceMappingURL=networkTypes.d.ts.map