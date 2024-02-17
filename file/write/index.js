"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = require("path");
const create_1 = require("../../directory/create");
const resolve_1 = require("../../path/resolve");
const write = async function write(dest, data, options) {
    dest = (0, resolve_1.resolve)(dest);
    const directory = (0, path_1.dirname)(dest);
    await (0, create_1.create)(directory);
    return promises_1.default.writeFile(dest, data, options);
};
exports.write = write;
