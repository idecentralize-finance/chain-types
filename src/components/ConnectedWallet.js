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
var jsx_runtime_1 = require("react/jsx-runtime");
var useChainType_1 = require("../hooks/useChainType");
var networkTypes_1 = require("../utils/networkTypes");
var react_1 = require("react");
var wagmi_1 = require("wagmi");
var ens_1 = require("viem/ens");
var styled_components_1 = require("styled-components");
var spl_name_service_1 = require("@bonfida/spl-name-service");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var default_avatar_png_1 = require("../assets/default-avatar.png");
var ConnectedWallet = function (walletProps) {
    var chainType = walletProps.chainType, address = walletProps.address, publicKey = walletProps.publicKey, shortenAddress = walletProps.shortenAddress, chainId = walletProps.chainId, isConnecting = walletProps.isConnecting;
    var _a = (0, react_1.useState)(default_avatar_png_1.default), loadedAvatar = _a[0], setLoadedAvatar = _a[1];
    var _b = (0, react_1.useState)(null), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(null), LoadedAddress = _c[0], setLoadedAddress = _c[1];
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    // Hooks for ENS data (for EVM addresses)
    var ensName = (0, wagmi_1.useEnsName)({ address: address || undefined });
    var avatar = (0, wagmi_1.useEnsAvatar)({
        name: ensName.data ? (0, ens_1.normalize)(ensName.data) : undefined,
    }).data;
    // Determine the account display values
    var isSolana = chainType === useChainType_1.solanaType;
    var isEVM = chainType === useChainType_1.evmType;
    // Effect for EVM (ENS)
    (0, react_1.useEffect)(function () {
        if (isEVM) {
            setLoadedAddress(address || null);
            setName(ensName.data || null);
            setLoadedAvatar(avatar || default_avatar_png_1.default);
        }
    }, [isEVM, address, ensName.data, avatar]);
    // Resolve Solana Name Service (SNS) domain
    (0, react_1.useEffect)(function () {
        var fetchSolanaName = function (connection, publicKey) { return __awaiter(void 0, void 0, void 0, function () {
            var domainName, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!publicKey) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, spl_name_service_1.getPrimaryDomain)(connection, publicKey)];
                    case 2:
                        domainName = _a.sent();
                        setName(domainName.reverse + '.sol');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error resolving Solana Name:', error_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        if (isSolana) {
            fetchSolanaName(connection, publicKey);
        }
    }, [isSolana, publicKey]);
    (0, react_1.useEffect)(function () {
        if (loadedAvatar) {
            setLoadedAvatar(loadedAvatar);
        }
        else if (address || publicKey) {
        }
    }, [loadedAvatar]);
    return ((0, jsx_runtime_1.jsxs)(WalletRow, { children: [chainId && ((0, jsx_runtime_1.jsx)(Network, { src: networkTypes_1.networkTypes[chainId].logo.src, alt: "".concat(chainType, " Network") })), isConnecting ? ((0, jsx_runtime_1.jsx)(WalletAddress, { children: "Connecting..." })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Avatar, { src: loadedAvatar, alt: "".concat(name || 'Default', " Avatar") }), (0, jsx_runtime_1.jsx)(WalletAddress, { children: name || shortenAddress(LoadedAddress || '') })] }))] }));
};
exports.default = ConnectedWallet;
var WalletAddress = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 1.2em;\n    color: #555;\n    margin: 0;\n    word-break: break-word;\n"], ["\n    font-size: 1.2em;\n    color: #555;\n    margin: 0;\n    word-break: break-word;\n"])));
var WalletRow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border: 2px solid #3c3737;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border: 2px solid #3c3737;\n    border-radius: 10px;\n    transition: background-color 0.3s, border-color 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 2px 2px 0 0 #252628;\n    }\n"])));
var Avatar = styled_components_1.default.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n"], ["\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n"])));
var Network = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: relative;\n    margin-left: 0;\n    margin-right: auto;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n"], ["\n    position: relative;\n    margin-left: 0;\n    margin-right: auto;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
