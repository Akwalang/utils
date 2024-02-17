"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
const path_1 = __importDefault(require("path"));
const resolve = function resolve(...paths) {
    const flat = paths.flat(Infinity);
    return path_1.default.resolve(...flat);
};
exports.resolve = resolve;
