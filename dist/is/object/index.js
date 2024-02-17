"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const getType_1 = require("../../types/getType");
const isObject = function isObject(value) {
    return (0, getType_1.getType)(value) === 'Object';
};
exports.isObject = isObject;
