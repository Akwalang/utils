"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const resolve_1 = require("../../path/resolve");
const string_1 = require("../../is/string");
const DEFAULTS = {
    encoding: 'utf8',
};
const read = function read(path, options) {
    path = (0, resolve_1.resolve)(path);
    options = Object.assign({}, DEFAULTS, (0, string_1.isString)(options) ? { encoding: options } : options);
    return promises_1.default.readFile(path, options);
};
exports.read = read;
