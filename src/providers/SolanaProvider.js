"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// SolanaProvider.tsx
var react_1 = require("react");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
var web3_js_1 = require("@solana/web3.js");
var SolanaProvider = function (_a) {
    var children = _a.children, rpcEndpoint = _a.rpcEndpoint;
    var network = wallet_adapter_base_1.WalletAdapterNetwork.Mainnet;
    var endpoint = (0, react_1.useMemo)(function () { return rpcEndpoint || (0, web3_js_1.clusterApiUrl)(network); }, [rpcEndpoint, network]);
    var wallets = (0, react_1.useMemo)(function () { return []; }, [network]);
    return ((0, jsx_runtime_1.jsx)(wallet_adapter_react_1.ConnectionProvider, { endpoint: endpoint, children: (0, jsx_runtime_1.jsx)(wallet_adapter_react_1.WalletProvider, { wallets: wallets, autoConnect: true, children: children }) }));
};
exports.SolanaProvider = SolanaProvider;
