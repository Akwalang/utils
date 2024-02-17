"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = void 0;
const toString = Object.prototype.toString;
const getType = function get(value) {
    return toString.call(value).slice(8, -1);
};
exports.getType = getType;
