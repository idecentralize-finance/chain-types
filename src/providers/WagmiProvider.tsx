import {FC, ReactNode} from 'react';
import { WagmiProvider, Config } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface WagmiProviderProps {
    children: ReactNode;
    config: Config<any, any>;
}
export const WagmiWrapper: FC<WagmiProviderProps> = ({ children, config }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
};
