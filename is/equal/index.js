"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
const nan_1 = require("../nan");
const date_1 = require("../date");
const array_1 = require("../array");
const object_1 = require("../object");
const _hasOwnProperty = Object.prototype.hasOwnProperty;
const isEqual = function isEqual(a, b) {
    if ((0, nan_1.isNaN)(a) && (0, nan_1.isNaN)(b))
        return true;
    if ((0, date_1.isDate)(a) && (0, date_1.isDate)(b))
        return +a === +b;
    if ((0, array_1.isArray)(a) && (0, array_1.isArray)(b)) {
        if (a.length !== b.length)
            return false;
        for (let i = 0, len = a.length; i < len; i++) {
            if (!isEqual(a[i], b[i]))
                return false;
        }
        return true;
    }
    if ((0, object_1.isObject)(a) && (0, object_1.isObject)(b)) {
        if (Object.keys(a).length !== Object.keys(b).length)
            return false;
        for (const name in a) {
            if (!_hasOwnProperty.call(a, name))
                continue;
            if (!isEqual(a[name], b[name]))
                return false;
        }
        return true;
    }
    return a === b;
};
exports.isEqual = isEqual;
