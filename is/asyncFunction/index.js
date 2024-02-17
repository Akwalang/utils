"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncFunction = void 0;
const getType_1 = require("../../types/getType");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const Constructor = (async () => { }).constructor;
const isAsyncFunction = function isAsyncFunction(value) {
    return (0, getType_1.getType)(value) === 'AsyncFunction';
};
exports.isAsyncFunction = isAsyncFunction;
