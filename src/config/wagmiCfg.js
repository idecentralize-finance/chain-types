"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var wagmi_1 = require("wagmi");
var chains_1 = require("wagmi/chains");
var connectors_1 = require("wagmi/connectors");
var viem_1 = require("viem");
var customPolygonAmoy = (0, viem_1.defineChain)({
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
exports.config = (0, wagmi_1.createConfig)({
    chains: [chains_1.mainnet, chains_1.sepolia, customPolygonAmoy],
    connectors: [
        (0, connectors_1.injected)(),
        (0, connectors_1.coinbaseWallet)(),
        (0, connectors_1.walletConnect)({
            projectId: import.meta.env.VITE_WC_PROJECT_ID,
            metadata: {
                name: 'Onigiri.box',
                description: 'Privacy funny and yummy',
                url: 'https://onigiri.box',
                icons: ['https://onigiri.com/icon.png'],
            },
        }),
    ],
    transports: (_a = {},
        _a[chains_1.mainnet.id] = (0, wagmi_1.http)('https://mainnet.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
        _a[chains_1.sepolia.id] = (0, wagmi_1.http)('https://sepolia.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
        _a[chains_1.polygonAmoy.id] = (0, wagmi_1.http)('https://polygon-amoy.infura.io/v3/640daef0814a43b4a17f9eea18bd9041'),
        _a),
});
