"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduplicate = void 0;
const deduplicate = function deduplicate(target, getId = value => value) {
    const map = new Map();
    for (let i = 0, len = target.length; i < len; i++) {
        const id = getId(target[i]);
        !map.has(id) && map.set(id, target[i]);
    }
    return Array.from(map.values());
};
exports.deduplicate = deduplicate;
