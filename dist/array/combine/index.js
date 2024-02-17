"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
const combine = function combine(keys, values) {
    return keys.reduce((result, key, i) => {
        result[key] = values[i];
        return result;
    }, {});
};
exports.combine = combine;
