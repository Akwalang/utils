"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const number_1 = require("../../is/number");
const undefined_1 = require("../../is/undefined");
const asyncFunction_1 = require("../../is/asyncFunction");
const crateRange = (from, to, step) => {
    const result = [];
    step = (from < to ? 1 : -1) * Math.abs(+step || 1);
    const compare = from < to
        ? (i) => i <= to
        : (i) => i >= to;
    for (let i = from; compare(i); i += step) {
        result.push(i);
    }
    return result;
};
const createValues = (count, callback) => {
    callback = callback ? callback : ((i) => i);
    return [...new Array(count)].map((v, i) => callback(i));
};
const createAsyncValues = (count, callback) => {
    const stack = [...new Array(count)].map((v, i) => callback(i));
    return Promise.all(stack);
};
function create(from, to, step) {
    if ((0, number_1.isNumber)(from)) {
        if ((0, undefined_1.isUndefined)(to)) {
            return createValues(from);
        }
        if ((0, number_1.isNumber)(to)) {
            return crateRange(from, to, step || 1);
        }
        if ((0, asyncFunction_1.isAsyncFunction)(to)) {
            return createAsyncValues(from, to);
        }
        if (typeof to === 'function') {
            return createValues(from, to);
        }
    }
    throw new Error('array.create received wrong arguments: ' + [...arguments]);
}
exports.create = create;
;
