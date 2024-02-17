"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = void 0;
const utils_1 = require("../utils");
const cyclicDeduplicate_1 = require("../cyclicDeduplicate");
function union(comparator, ...arrays) {
    const items = (0, utils_1.isComparator)(comparator) ? arrays : [comparator, ...arrays];
    const compare = (0, utils_1.isComparator)(comparator) ? comparator : undefined;
    return (0, cyclicDeduplicate_1.cyclicDeduplicate)(items.flat(), compare);
}
exports.union = union;
