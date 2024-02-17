"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAsyncTimeout = void 0;
const setAsyncTimeout = function setAsyncTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
};
exports.setAsyncTimeout = setAsyncTimeout;
