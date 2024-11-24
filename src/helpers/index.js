"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
var toCamelCase = function (text) {
    return text
        .replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, '');
};
exports.toCamelCase = toCamelCase;
