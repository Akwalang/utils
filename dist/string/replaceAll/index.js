"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = void 0;
const replaceAll = function replaceAll(value, sub, replacer) {
    return value.split(sub).join(replacer);
};
exports.replaceAll = replaceAll;
