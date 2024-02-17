"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
const shuffle = function shuffle(array) {
    array = [...array];
    for (let i = 0, len = array.length; i < len; i++) {
        const j = Math.floor(Math.random() * len);
        [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
};
exports.shuffle = shuffle;
