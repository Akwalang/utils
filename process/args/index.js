"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = void 0;
const jsonParse_1 = require("../../common/jsonParse");
const reg = /-{0,2}([^=\s]+)=?\s*(.*)/;
// process.argv
const args = function args(args) {
    const result = {};
    for (let i = 2, len = args.length; i < len; i++) {
        const [, name, value] = args[i].match(reg) || [];
        result[name] = value ? (0, jsonParse_1.jsonParse)(value) : true;
    }
    return result;
};
exports.args = args;
