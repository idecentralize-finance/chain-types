// SolanaProvider.tsx
import {FC, ReactNode, useMemo} from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';


interface SolanaProviderProps {
    children: ReactNode;
    rpcEndpoint: string;
}
export const SolanaProvider: FC<SolanaProviderProps> = ({ children, rpcEndpoint }) => {
    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => rpcEndpoint || clusterApiUrl(network), [rpcEndpoint, network]);
    const wallets = useMemo(
        () => [

        ],
        [network],
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    );
};
