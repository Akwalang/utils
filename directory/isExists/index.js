"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExists = void 0;
const stat_1 = require("../../path/stat");
const isExists = async function isExists(...target) {
    try {
        const stt = await (0, stat_1.stat)(...target);
        return !!stt && stt.isDirectory();
    }
    catch (e) {
        return false;
    }
};
exports.isExists = isExists;
