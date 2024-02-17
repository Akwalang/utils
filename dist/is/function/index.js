"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
const getType_1 = require("../../types/getType");
const isFunction = function isFunction(value) {
    return (0, getType_1.getType)(value) === 'Function';
};
exports.isFunction = isFunction;
