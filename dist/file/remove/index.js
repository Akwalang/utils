"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_1 = require("../../path/resolve");
const remove = function remove(...path) {
    const target = (0, resolve_1.resolve)(...path);
    return promises_1.default.unlink(target);
};
exports.remove = remove;
