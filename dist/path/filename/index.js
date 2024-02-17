"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filename = void 0;
const path_1 = require("path");
const url_1 = require("url");
const filename = function filename(meta) {
    const path = meta.url.indexOf('///') !== -1 ? (0, url_1.fileURLToPath)(meta.url) : meta.url;
    const dir = (0, path_1.dirname)(path);
    return path.replace(dir, '').slice(1);
};
exports.filename = filename;
