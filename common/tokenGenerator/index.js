"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerator = void 0;
const LETTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const tokenGenerator = function tokenGenerator(length, letters = LETTERS) {
    let result = '';
    while (length--) {
        result += letters[~~(Math.random() * letters.length)];
    }
    return result;
};
exports.tokenGenerator = tokenGenerator;
