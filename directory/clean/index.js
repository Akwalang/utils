"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = void 0;
const resolve_1 = require("../../path/resolve");
const stat_1 = require("../../path/stat");
const remove_1 = require("../remove");
const remove_2 = require("../../file/remove");
const read_1 = require("../read");
const clean = async function clean(...path) {
    const target = (0, resolve_1.resolve)(...path);
    const children = await (0, read_1.read)(target);
    for (let i = 0, len = children.length; i < len; i++) {
        const child = (0, resolve_1.resolve)(target, children[i]);
        const stt = await (0, stat_1.stat)(child);
        if (stt && stt.isDirectory())
            await (0, remove_1.remove)(child);
        if (stt && stt.isFile())
            await (0, remove_2.remove)(child);
    }
};
exports.clean = clean;
