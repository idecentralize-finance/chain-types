import { useWallet } from '@solana/wallet-adapter-react';
import { useDisconnect } from 'wagmi';
import { ChainType } from '../types/index.ts';
import { evmLogoData, solanaLogoData } from '../utils/logos.tsx';

// Define constants for chainType names
export const solanaName = 'solana' as const;
export const evmName = 'evm' as const;

// Use the constants to define the types
export type Solana = typeof solanaName;
export type EVM = typeof evmName;
export type ValidChainsType = Solana | EVM;

// Create reusable constants for the chain types
export const solanaType: Solana = solanaName;
export const evmType: EVM = evmName;

// Custom hook to return chainTypes
export const useChainTypes = () => {
    const { disconnect } = useWallet();
    const { disconnect: disconnectEVM } = useDisconnect();

    // Define chainTypes dynamically
    const chainTypes: Record<ValidChainsType, ChainType> = {
        [evmName]: {
            name: 'EVM',
            logo: evmLogoData,
            disconnect: () => {
                disconnectEVM();
            },
        },
        [solanaName]: {
            name: 'Solana',
            logo: solanaLogoData,
            disconnect: () => {
                disconnect();
            },
        },
    };

    return chainTypes;
};
