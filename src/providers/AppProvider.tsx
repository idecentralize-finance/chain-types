import {FC, ReactNode} from 'react';
import {WagmiWrapper} from './WagmiProvider.tsx';
import { SolanaProvider } from './SolanaProvider.tsx';
import {Config} from "wagmi";

interface AppProviderProps {
    children: ReactNode;
    config: Config<any, any>;
    solanaRpcEndpoint: string;
}
export const ChainTypesProvider: FC<AppProviderProps> = ({ children, config, solanaRpcEndpoint }) => {
    return (
        <WagmiWrapper config={config}>
            <SolanaProvider rpcEndpoint={solanaRpcEndpoint}>{children}</SolanaProvider>
        </WagmiWrapper>
    );
};
