"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useChainType_1 = require("../hooks/useChainType");
var Button_1 = require("./Button");
var DisconnectButton = function (_a) {
    var chainType = _a.chainType, onCloseModal = _a.onCloseModal;
    var chainTypes = (0, useChainType_1.useChainTypes)();
    var handleClick = function () {
        chainTypes[chainType].disconnect();
        onCloseModal();
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { text: "Disconnect", onClick: handleClick }) }));
};
exports.default = DisconnectButton;
