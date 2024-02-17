"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getter = void 0;
const getter = function getter(data, path) {
    let name, context = data;
    const paths = path.split(/]\[|]\.|\.|]|\[/).filter(v => v);
    while ((name = paths.shift())) {
        if (context == null)
            break;
        context = context[name];
    }
    return context;
};
exports.getter = getter;
