"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainTypesProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var WagmiProvider_1 = require("./WagmiProvider");
var SolanaProvider_1 = require("./SolanaProvider");
var ChainTypesProvider = function (_a) {
    var children = _a.children, config = _a.config, solanaRpcEndpoint = _a.solanaRpcEndpoint;
    return ((0, jsx_runtime_1.jsx)(WagmiProvider_1.WagmiWrapper, { config: config, children: (0, jsx_runtime_1.jsx)(SolanaProvider_1.SolanaProvider, { rpcEndpoint: solanaRpcEndpoint, children: children }) }));
};
exports.ChainTypesProvider = ChainTypesProvider;
