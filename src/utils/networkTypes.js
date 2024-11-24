"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkTypes = exports.baseNetworkId = exports.binanceNetworkId = exports.arbitrumNetworkId = exports.optimismNetworkId = exports.amoyTestnetId = exports.polygonNetworkId = exports.solanaTestnetId = exports.solanaNetworkId = exports.sepoliaTestnetId = exports.ethereumNetworkId = void 0;
var logos_1 = require("./logos");
// Define constants for mainnet and testnet IDs
// https://chainlist.org/
exports.ethereumNetworkId = 1;
exports.sepoliaTestnetId = 11155111;
exports.solanaNetworkId = 101;
exports.solanaTestnetId = 102;
exports.polygonNetworkId = 137;
exports.amoyTestnetId = 80002;
exports.optimismNetworkId = 10;
exports.arbitrumNetworkId = 42161;
exports.binanceNetworkId = 56;
exports.baseNetworkId = 8453;
// Define networkTypes using numeric keys
exports.networkTypes = (_a = {},
    // Ethereum
    _a[exports.ethereumNetworkId] = {
        name: 'Ethereum',
        logo: logos_1.evmLogoData,
        networkId: exports.ethereumNetworkId,
        isTestnet: false,
    },
    _a[exports.sepoliaTestnetId] = {
        name: 'Ethereum Sepolia',
        logo: logos_1.evmLogoData,
        networkId: exports.sepoliaTestnetId,
        isTestnet: true,
    },
    // Solana
    _a[exports.solanaNetworkId] = {
        name: 'Solana',
        logo: logos_1.solanaLogoData,
        networkId: exports.solanaNetworkId,
        isTestnet: false,
    },
    _a[exports.solanaTestnetId] = {
        name: 'Solana Testnet',
        logo: logos_1.solanaLogoData,
        networkId: exports.solanaTestnetId,
        isTestnet: true,
    },
    // Polygon
    _a[exports.polygonNetworkId] = {
        name: 'Polygon',
        logo: logos_1.polygonLogoData,
        networkId: exports.polygonNetworkId,
        isTestnet: false,
    },
    _a[exports.amoyTestnetId] = {
        name: 'Polygon Amoy Testnet',
        logo: logos_1.polygonLogoData,
        networkId: exports.amoyTestnetId,
        isTestnet: true,
    },
    // Optimism
    _a[exports.optimismNetworkId] = {
        name: 'Optimism',
        logo: logos_1.optimismLogoData,
        networkId: exports.optimismNetworkId,
        isTestnet: false,
    },
    // Arbitrum
    _a[exports.arbitrumNetworkId] = {
        name: 'Arbitrum',
        logo: logos_1.arbitrumLogoData,
        networkId: exports.arbitrumNetworkId,
        isTestnet: false,
    },
    // Binance Smart Chain
    _a[exports.binanceNetworkId] = {
        name: 'Binance Smart Chain',
        logo: logos_1.binanceLogoData,
        networkId: exports.binanceNetworkId,
        isTestnet: false,
    },
    // Base Network
    _a[exports.baseNetworkId] = {
        name: 'Base Network',
        logo: logos_1.evmLogoData,
        networkId: exports.baseNetworkId,
        isTestnet: false,
    },
    _a);
