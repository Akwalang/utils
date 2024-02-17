"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = void 0;
const assign = function assign(array, getter, accumulator) {
    return array.reduce((result, item, i) => {
        const adds = getter(item, i);
        adds && Object.assign(result, adds);
        return result;
    }, accumulator || {});
};
exports.assign = assign;
