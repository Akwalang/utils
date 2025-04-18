"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = function random(lower, upper, floor = false) {
    const value = lower + (upper - lower + (floor ? 1 : 0)) * Math.random();
    return floor ? Math.floor(value) : value;
};
exports.random = random;
