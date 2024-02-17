"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirname = void 0;
const path_1 = require("path");
const url_1 = require("url");
const dirname = function dirname(meta) {
    const path = meta.url.indexOf('///') !== -1 ? (0, url_1.fileURLToPath)(meta.url) : meta.url;
    return (0, path_1.dirname)(path);
};
exports.dirname = dirname;
