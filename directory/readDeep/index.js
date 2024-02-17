"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDeep = void 0;
const resolve_1 = require("../../path/resolve");
const read_1 = require("../read");
const readDeep = async function readDeep(path) {
    let items = await (0, read_1.read)(path);
    items = items.map(item => (0, resolve_1.resolve)(path, item));
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const children = await readDeep(items[i]);
        result.push(...children, items[i]);
    }
    return result;
};
exports.readDeep = readDeep;
