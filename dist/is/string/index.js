"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
const getType_1 = require("../../types/getType");
const isString = function isString(value) {
    return (0, getType_1.getType)(value) === 'String';
};
exports.isString = isString;
