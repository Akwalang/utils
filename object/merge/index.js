"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const clone_1 = require("../clone");
const plainObject_1 = require("../../is/plainObject");
const { hasOwnProperty } = Object.prototype;
const merge = function merge(dest, src) {
    for (const name in src) {
        if (!hasOwnProperty.call(src, name))
            continue;
        const _src = (0, plainObject_1.isPlainObject)(src[name]);
        const _dest = (0, plainObject_1.isPlainObject)(dest[name]);
        if (_src && _dest) {
            dest[name] = merge({ ...dest[name] }, src[name]);
        }
        else {
            dest[name] = (0, clone_1.clone)(src[name]);
        }
    }
    return dest;
};
exports.merge = merge;
