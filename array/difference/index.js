"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = void 0;
const utils_1 = require("../utils");
const isGetter = (worker) => worker.length === 1;
function difference(a, b, worker = utils_1.DEFAULT_COMPARATOR) {
    let comparator;
    if ((0, utils_1.isComparator)(worker)) {
        comparator = worker;
    }
    if (isGetter(worker)) {
        comparator = (a, b) => (0, utils_1.DEFAULT_COMPARATOR)(worker(a), worker(b));
    }
    return a.filter(av => !b.find(bv => comparator(av, bv)));
}
exports.difference = difference;
;
