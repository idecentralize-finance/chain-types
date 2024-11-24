"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConnector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var react_1 = require("react");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
var wagmi_1 = require("wagmi");
var useChainType_1 = require("../hooks/useChainType");
var walletTypes_1 = require("../utils/walletTypes");
var logos_1 = require("../utils/logos");
var helpers_1 = require("../helpers");
var Button_1 = require("./Button");
var DisconnectButton_1 = require("./DisconnectButton");
var ConnectedWallet_1 = require("./ConnectedWallet");
function getWalletLogo(key) {
    var camelCaseKey = (0, helpers_1.toCamelCase)(key);
    if (camelCaseKey in walletTypes_1.walletTypes) {
        return walletTypes_1.walletTypes[camelCaseKey].logo;
    }
    return logos_1.defaultWalletLogoData;
}
var WalletConnector = function () {
    // React hooks
    var _a = (0, react_1.useState)(null), chainType = _a[0], setChainType = _a[1];
    var _b = (0, react_1.useState)(false), modalOpen = _b[0], setModalOpen = _b[1];
    var _c = (0, react_1.useState)(false), walletConnected = _c[0], setWalletConnected = _c[1];
    var _d = (0, react_1.useState)(false), walletConnecting = _d[0], setWalletConnecting = _d[1];
    var _e = (0, react_1.useState)(false), showChainSelection = _e[0], setShowChainSelection = _e[1];
    // custom hooks
    var chainTypes = (0, useChainType_1.useChainTypes)();
    // Solana hooks
    var _f = (0, wallet_adapter_react_1.useWallet)(), publicKey = _f.publicKey, connected = _f.connected, connect = _f.connect, select = _f.select, wallets = _f.wallets, connecting = _f.connecting;
    // Wagmi hooks
    var _g = (0, wagmi_1.useConnect)(), connectors = _g.connectors, connectEVM = _g.connect;
    var _h = (0, wagmi_1.useAccount)(), address = _h.address, isConnected = _h.isConnected, chainId = _h.chainId, isConnecting = _h.isConnecting;
    // modal control functions
    var openModal = function () { return setModalOpen(true); };
    var closeModal = function () { return setModalOpen(false); };
    // chain selection functions
    var toggleChainSelection = function () { return setShowChainSelection(function (prev) { return !prev; }); };
    var handleChainTypeSelection = function (type) {
        setChainType(type);
    };
    // wallet selection functions
    var handleSolanaWalletSelect = function (walletName) { return __awaiter(void 0, void 0, void 0, function () {
        var wallet, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    wallet = wallets.find(function (w) { return w.adapter.name === walletName; });
                    if (!wallet)
                        throw new Error("Wallet ".concat(walletName, " not found."));
                    if (wallet.readyState !== wallet_adapter_base_1.WalletReadyState.Installed &&
                        wallet.readyState !== wallet_adapter_base_1.WalletReadyState.Loadable) {
                        alert("Wallet ".concat(walletName, " is not ready. Please install it."));
                        return [2 /*return*/];
                    }
                    select(walletName);
                    if (!!connected) return [3 /*break*/, 2];
                    return [4 /*yield*/, connect()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error connecting Solana wallet:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // loading component
    (0, react_1.useEffect)(function () {
        // Check if a supported connector is installed
        var solanaInstalledWallet = wallets;
        var evmInstalledWallet = connectors;
        if (!solanaInstalledWallet.length) {
            console.warn("No walletTypes detected. Please ensure a Solana wallet is installed.");
        }
        if (!evmInstalledWallet.length) {
            console.warn("No connectors detected. Please ensure an EVM wallet is installed.");
        }
        // Check if wallet is connecting
        if (isConnecting || connecting) {
            setWalletConnecting(true);
        }
        else {
            setWalletConnecting(false);
        }
        // Check if wallet is connected
        if (connected || isConnected) {
            setChainType(connected ? useChainType_1.solanaType : useChainType_1.evmType);
            setWalletConnected(true);
            // TODO: Update this to use chainId and check if it's a default network
        }
        else {
            setWalletConnected(false);
        }
    }, [wallets, isConnected, connected, isConnecting, connecting]);
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsxs)(WalletList, { children: [chainType && (walletConnected) ? ((0, jsx_runtime_1.jsx)(SelectedWalletInfo, { onClick: openModal, children: (0, jsx_runtime_1.jsx)(ConnectedWallet_1.default, { chainType: chainType, address: address, publicKey: publicKey, shortenAddress: function (addr) { return addr.slice(0, 6) + '...' + addr.slice(-4); }, chainId: chainId, isConnected: walletConnected, isConnecting: walletConnecting }) })) : ((0, jsx_runtime_1.jsx)(Button_1.default, { text: "Connect Wallet", onClick: openModal })), modalOpen && ((0, jsx_runtime_1.jsx)(ModalBackground, { onClick: closeModal, children: (0, jsx_runtime_1.jsxs)(ModalContent, { onClick: function (e) { return e.stopPropagation(); }, children: [(0, jsx_runtime_1.jsx)(CloseButton, { onClick: closeModal, children: "\u00D7" }), (walletConnected) && chainType ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ConnectedWallet_1.default, { chainType: chainType, address: address, publicKey: publicKey, shortenAddress: function (addr) { return addr.slice(0, 6) + '...' + addr.slice(-4); }, chainId: chainId, isConnected: walletConnected, isConnecting: walletConnecting }), (0, jsx_runtime_1.jsx)(DisconnectButton_1.default, { onCloseModal: closeModal, chainType: chainType, onDisconnect: function () { return setWalletConnected(false); } })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !chainType || showChainSelection ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Select Chain" }), (0, jsx_runtime_1.jsx)(ChainSelectionContainer, { children: Object.entries(chainTypes).map(function (_a) {
                                                var key = _a[0], chain = _a[1];
                                                return ((0, jsx_runtime_1.jsxs)(ChainRow, { onClick: function () {
                                                        handleChainTypeSelection(key);
                                                        setShowChainSelection(false);
                                                    }, children: [(0, jsx_runtime_1.jsx)(ChainImage, { src: chain.logo.src, alt: chain.logo.alt }), (0, jsx_runtime_1.jsx)(ChainLabel, { children: chain.name })] }, key));
                                            }) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(SelectedChain, { onClick: toggleChainSelection, children: [(0, jsx_runtime_1.jsx)(ChainImage, { src: chainTypes[chainType].logo.src, alt: chainType }), (0, jsx_runtime_1.jsxs)(ChainLabel, { children: [chainTypes[chainType].name, " (Click to Change)"] })] }), (0, jsx_runtime_1.jsx)("h2", { children: "Select Wallet" }), (0, jsx_runtime_1.jsxs)(WalletOptions, { children: [chainType === useChainType_1.solanaType &&
                                                    wallets.map(function (wallet) {
                                                        var _a;
                                                        return ((0, jsx_runtime_1.jsxs)(WalletRow, { onClick: function () {
                                                                handleSolanaWalletSelect(wallet.adapter.name);
                                                                closeModal();
                                                                setWalletConnected(true);
                                                            }, children: [(0, jsx_runtime_1.jsx)(WalletImage, { src: (_a = getWalletLogo(wallet.adapter.name)) === null || _a === void 0 ? void 0 : _a.src, alt: wallet.adapter.name }), (0, jsx_runtime_1.jsx)(WalletLabel, { children: wallet.adapter.name })] }, wallet.adapter.name));
                                                    }), chainType === useChainType_1.evmType &&
                                                    connectors.map(function (connector) {
                                                        var _a;
                                                        return ((0, jsx_runtime_1.jsxs)(WalletRow, { onClick: function () {
                                                                connectEVM({ connector: connector });
                                                                closeModal();
                                                                setWalletConnected(true);
                                                            }, children: [(0, jsx_runtime_1.jsx)(WalletImage, { src: (_a = getWalletLogo(connector.name)) === null || _a === void 0 ? void 0 : _a.src, alt: connector.name }), (0, jsx_runtime_1.jsx)(WalletLabel, { children: connector.name })] }, connector.id));
                                                    })] })] })) }))] }) }))] }) }));
};
exports.WalletConnector = WalletConnector;
var SelectedChain = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    cursor: pointer;\n    border: 2px solid transparent;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    cursor: pointer;\n    border: 2px solid transparent;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"])));
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));
var WalletList = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 10px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 10px;\n"])));
var SelectedWalletInfo = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n"])));
var WalletRow = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border: 2px solid #3c3737;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border: 2px solid #3c3737;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"])));
var Modal = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
var ModalContent = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    background: #363636;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 0 4px 10px rgba(255, 0, 0, 0.5),\n    0 8px 20px rgba(0, 255, 0, 0.5),\n    0 12px 30px rgba(0, 0, 255, 0.5);\n"], ["\n    background: #363636;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 0 4px 10px rgba(255, 0, 0, 0.5),\n    0 8px 20px rgba(0, 255, 0, 0.5),\n    0 12px 30px rgba(0, 0, 255, 0.5);\n"])));
var ModalBackground = (0, styled_components_1.default)(Modal)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    /* Modal background inherits styles from Modal */\n"], ["\n    /* Modal background inherits styles from Modal */\n"])));
var CloseButton = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: transparent;\n    border: none;\n    font-size: 1.5em;\n    cursor: pointer;\n"], ["\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: transparent;\n    border: none;\n    font-size: 1.5em;\n    cursor: pointer;\n"])));
var ChainSelectionContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n"])));
var ChainRow = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    cursor: pointer;\n    border: 2px solid transparent;\n    border-radius: 10px;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 10px;\n    cursor: pointer;\n    border: 2px solid transparent;\n    border-radius: 10px;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"])));
var ChainImage = styled_components_1.default.img(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n"], ["\n    width: 40px;\n    height: 40px;\n"])));
var ChainLabel = styled_components_1.default.span(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    font-size: 1.2em;\n    color: #555;\n"], ["\n    font-size: 1.2em;\n    color: #555;\n"])));
var WalletOptions = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    &:hover {\n        color: #0073e6;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    &:hover {\n        color: #0073e6;\n    }\n"])));
var WalletImage = styled_components_1.default.img(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n"], ["\n    width: 40px;\n    height: 40px;\n"])));
var WalletLabel = styled_components_1.default.span(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    font-size: 1.2em;\n    color: #6b6a6a;\n"], ["\n    font-size: 1.2em;\n    color: #6b6a6a;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
