"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./button_tyle.css");
var Button = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'Button' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.type, type = _d === void 0 ? 'button' : _d, onClick = _a.onClick;
    // Delayed onClick handler
    var handleClick = function (e) {
        if (type !== 'submit') {
            e.preventDefault();
        }
        setTimeout(function () {
            if (typeof onClick === 'function') {
                onClick(e);
            }
        }, 250);
    };
    return ((0, jsx_runtime_1.jsxs)("button", { className: "button ".concat(color), type: type, onClick: handleClick, children: [(0, jsx_runtime_1.jsx)("span", { className: "text", children: text }), (0, jsx_runtime_1.jsx)("span", { className: "shimmer" })] }));
};
exports.default = Button;
