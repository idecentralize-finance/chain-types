import {
    braveLogoData,
    coinbaseLogoData,
    phantomLogoData,
    metamaskLogoData,
    walletConnectLogoData
} from "./logos.tsx";


export const walletTypes  = {
    metaMask: {
        name: 'MetaMask',
        logo: metamaskLogoData,
    },
    walletConnect:{
        name: 'WalletConnect',
        logo: walletConnectLogoData,
    },
    coinbaseWallet: {
        name: 'Coinbase Wallet',
        logo: coinbaseLogoData,
    },
    phantom: {
        name: 'Phantom',
        logo: phantomLogoData,
    },
    braveWallet:{
        name: 'Brave Wallet',
        logo: braveLogoData,
    },
    injected: {
        name: 'Injected',
        logo: metamaskLogoData,
    }
} as const;

export type ValidWalletType = keyof typeof walletTypes;
