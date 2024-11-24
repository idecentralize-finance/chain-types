"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WagmiWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var wagmi_1 = require("wagmi");
var react_query_1 = require("@tanstack/react-query");
var queryClient = new react_query_1.QueryClient();
var WagmiWrapper = function (_a) {
    var children = _a.children, config = _a.config;
    return ((0, jsx_runtime_1.jsx)(wagmi_1.WagmiProvider, { config: config, children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient, children: children }) }));
};
exports.WagmiWrapper = WagmiWrapper;
