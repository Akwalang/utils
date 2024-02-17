"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_1 = require("../../path/resolve");
const stat_1 = require("../../path/stat");
const remove = async function remove(path) {
    const target = (0, resolve_1.resolve)(path);
    const stt = await (0, stat_1.stat)(target);
    if (!stt || !stt.isDirectory())
        return;
    return promises_1.default.rm(target, { recursive: true });
};
exports.remove = remove;
