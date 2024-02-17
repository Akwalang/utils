"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection = void 0;
const utils_1 = require("../utils");
const intersection = function intersection(comparator, ...arrays) {
    const items = (0, utils_1.isComparator)(comparator) ? arrays : [comparator, ...arrays];
    const compare = (0, utils_1.isComparator)(comparator) ? comparator : utils_1.DEFAULT_COMPARATOR;
    return items[0].filter((a) => {
        for (let i = 1, len = items.length; i < len; i++) {
            const item = items[i].find(b => compare(a, b));
            if (!item)
                return false;
        }
        return true;
    });
};
exports.intersection = intersection;
