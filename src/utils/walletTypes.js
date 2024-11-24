"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletTypes = void 0;
var logos_1 = require("./logos");
exports.walletTypes = {
    metaMask: {
        name: 'MetaMask',
        logo: logos_1.metamaskLogoData,
    },
    walletConnect: {
        name: 'WalletConnect',
        logo: logos_1.walletConnectLogoData,
    },
    coinbaseWallet: {
        name: 'Coinbase Wallet',
        logo: logos_1.coinbaseLogoData,
    },
    phantom: {
        name: 'Phantom',
        logo: logos_1.phantomLogoData,
    },
    braveWallet: {
        name: 'Brave Wallet',
        logo: logos_1.braveLogoData,
    },
    injected: {
        name: 'Injected',
        logo: logos_1.metamaskLogoData,
    }
};
