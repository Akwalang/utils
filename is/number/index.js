"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const getType_1 = require("../../types/getType");
const isNumber = function isNumber(value) {
    return (0, getType_1.getType)(value) === 'Number';
};
exports.isNumber = isNumber;
