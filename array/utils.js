"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_COMPARATOR = exports.isComparator = void 0;
const nan_1 = require("../is/nan");
const isComparator = (worker) => {
    return typeof worker === 'function' && worker.length === 2;
};
exports.isComparator = isComparator;
const DEFAULT_COMPARATOR = (a, b) => a === b || (0, nan_1.isNaN)(a) && (0, nan_1.isNaN)(b);
exports.DEFAULT_COMPARATOR = DEFAULT_COMPARATOR;
