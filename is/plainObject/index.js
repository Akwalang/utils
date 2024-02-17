"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = void 0;
const isPlainObject = function isPlainObject(value) {
    return !!value && value.constructor === Object;
};
exports.isPlainObject = isPlainObject;
