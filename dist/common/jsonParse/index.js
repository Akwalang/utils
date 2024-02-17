"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParse = void 0;
function jsonParse(value, fallback) {
    try {
        return JSON.parse(value);
    }
    catch (e) {
        return arguments.length >= 2 ? fallback : value;
    }
}
exports.jsonParse = jsonParse;
