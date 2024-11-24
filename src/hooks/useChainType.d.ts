import { ChainType } from '../types';
export declare const solanaName: "solana";
export declare const evmName: "evm";
export type Solana = typeof solanaName;
export type EVM = typeof evmName;
export type ValidChainsType = Solana | EVM;
export declare const solanaType: Solana;
export declare const evmType: EVM;
export declare const useChainTypes: () => Record<ValidChainsType, ChainType>;
//# sourceMappingURL=useChainType.d.ts.map