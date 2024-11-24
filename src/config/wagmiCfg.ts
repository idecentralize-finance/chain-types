import {http, createConfig} from 'wagmi'
import { mainnet, sepolia, polygonAmoy } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import {defineChain} from "viem";

const customPolygonAmoy = defineChain({
    id: 80002,
    name: 'polygonAmoy',
    nativeCurrency: {
        name: 'POL',
        symbol: 'POL',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ['https://polygon-amoy.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'],
        },
    },
});

export const config = createConfig({
    chains: [mainnet, sepolia, customPolygonAmoy],
    connectors: [
        injected(),
        coinbaseWallet(),
        walletConnect({
            projectId: import.meta.env.VITE_WC_PROJECT_ID,
            metadata: {
                name: 'Onigiri.box',
                description: 'Privacy funny and yummy',
                url: 'https://onigiri.box',
                icons: ['https://onigiri.com/icon.png'],
            },
        }),
    ],
    transports: {
        [mainnet.id]: http('https://mainnet.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
        [sepolia.id]: http('https://sepolia.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
        [polygonAmoy.id]: http('https://polygon-amoy.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
    },
})


declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}
