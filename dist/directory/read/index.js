"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_1 = require("../../path/resolve");
const isExists_1 = require("../isExists");
const read = async function read(...path) {
    const target = (0, resolve_1.resolve)(...path);
    const isDir = await (0, isExists_1.isExists)(target);
    return isDir ? promises_1.default.readdir(target) : [];
};
exports.read = read;
