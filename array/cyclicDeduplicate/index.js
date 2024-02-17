"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyclicDeduplicate = void 0;
const utils_1 = require("../utils");
const cyclicDeduplicate = function cyclicDeduplicate(target, comparator) {
    comparator = comparator || utils_1.DEFAULT_COMPARATOR;
    for (let i = 0; i < target.length - 1; i++) {
        for (let j = i + 1; j < target.length; j++) {
            if (comparator(target[i], target[j])) {
                target.splice(j--, 1);
            }
        }
    }
    return target;
};
exports.cyclicDeduplicate = cyclicDeduplicate;
