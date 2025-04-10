"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const LETTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function random(length, letters = LETTERS) {
    let result = '';
    while (length--) {
        result += letters[~~(Math.random() * letters.length)];
    }
    return result;
}
exports.random = random;
;
