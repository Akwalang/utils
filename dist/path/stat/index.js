"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stat = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_1 = require("../resolve");
const stat = async function stat(...path) {
    const target = (0, resolve_1.resolve)(...path);
    try {
        return await promises_1.default.lstat(target);
    }
    catch (e) {
        return null;
    }
};
exports.stat = stat;
