"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = void 0;
const deduplicate_1 = require("../deduplicate");
const is_1 = require("../../is");
function union(...args) {
    const getter = (0, is_1.isFunction)(args[0]) ? args[0] : (v) => v;
    const arrays = (0, is_1.isFunction)(args[0]) ? args.slice(1) : args;
    return (0, deduplicate_1.deduplicate)(arrays.flat(), getter);
}
exports.union = union;
