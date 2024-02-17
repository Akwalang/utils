"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const nan_1 = require("../../is/nan");
const function_1 = require("../../is/function");
const createComparator = (value) => (item) => {
    if (item < value)
        return 1;
    if (item > value)
        return -1;
    return 0;
};
const middle = (from, to) => Math.floor((from + to) / 2);
const binarySearch = function binarySearch(array, value, side = 0) {
    let from = 0;
    let to = array.length - 1;
    const comparator = (0, function_1.isFunction)(value) ? value : createComparator(value);
    const mid = middle(from, to);
    const check = (0, function_1.isFunction)(value) && comparator(array[mid]);
    if ((0, nan_1.isNaN)(+check)) {
        throw new Error('array.binarySearch: comparator should return number value');
    }
    let result = -1;
    while (from <= to) {
        const idx = middle(from, to);
        const r = comparator(array[idx]);
        if ((0, nan_1.isNaN)(+r))
            break;
        if (r === 0) {
            result = idx;
            if (side < 0)
                to = idx - 1;
            else if (side > 0)
                from = idx + 1;
            else
                break;
        }
        else if (r > 0)
            from = idx + 1;
        else if (r < 0)
            to = idx - 1;
    }
    return result;
};
exports.binarySearch = binarySearch;
