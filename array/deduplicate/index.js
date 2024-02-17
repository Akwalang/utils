"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduplicate = void 0;
const deduplicate = function deduplicate(target, getId = value => value) {
    const map = {};
    for (let i = 0, len = target.length; i < len; i++) {
        const id = '' + getId(target[i]);
        if (id in map)
            continue;
        map[id] = target[i];
    }
    return Object.values(map);
};
exports.deduplicate = deduplicate;
