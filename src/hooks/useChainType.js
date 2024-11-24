"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainTypes = exports.evmType = exports.solanaType = exports.evmName = exports.solanaName = void 0;
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wagmi_1 = require("wagmi");
var logos_1 = require("../utils/logos");
// Define constants for chainType names
exports.solanaName = 'solana';
exports.evmName = 'evm';
// Create reusable constants for the chain types
exports.solanaType = exports.solanaName;
exports.evmType = exports.evmName;
// Custom hook to return chainTypes
var useChainTypes = function () {
    var _a;
    var disconnect = (0, wallet_adapter_react_1.useWallet)().disconnect;
    var disconnectEVM = (0, wagmi_1.useDisconnect)().disconnect;
    // Define chainTypes dynamically
    var chainTypes = (_a = {},
        _a[exports.evmName] = {
            name: 'EVM',
            logo: logos_1.evmLogoData,
            disconnect: function () {
                disconnectEVM();
            },
        },
        _a[exports.solanaName] = {
            name: 'Solana',
            logo: logos_1.solanaLogoData,
            disconnect: function () {
                disconnect();
            },
        },
        _a);
    return chainTypes;
};
exports.useChainTypes = useChainTypes;
