"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchRange = void 0;
const DEFAULT_GETTER = (v) => v;
const matchRange = function matchRange(array, fallback, getValue = DEFAULT_GETTER) {
    if (!array.length)
        return fallback;
    return array.reduce((result, item) => {
        const value = getValue(item);
        const min = Math.min(result[0], value);
        const max = Math.max(result[1], value);
        return [min, max];
    }, [Infinity, -Infinity]);
};
exports.matchRange = matchRange;
