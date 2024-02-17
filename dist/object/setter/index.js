"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setter = void 0;
const reg = /]\[|]\.|\.|]|\[/g;
var Types;
(function (Types) {
    Types[Types["TYPE_OBJECT"] = 1] = "TYPE_OBJECT";
    Types[Types["TYPE_ARRAY"] = 2] = "TYPE_ARRAY";
})(Types || (Types = {}));
const parse = (path) => {
    const result = [];
    let match = null;
    let name = null;
    let prev = 0;
    while ((match = reg.exec(path))) {
        const { 0: splitter, index } = match;
        name = path.slice(prev, index);
        if ((prev || name) && prev !== path.length) {
            const type = {
                '.': Types.TYPE_OBJECT,
                '[': Types.TYPE_ARRAY,
            }[splitter.slice(-1)] || null;
            result.push({ name, type });
        }
        prev = index + splitter.length;
    }
    (name = path.slice(prev)) && result.push({ name, type: null });
    return result;
};
const createNode = (type) => ({
    [Types.TYPE_OBJECT]: {},
    [Types.TYPE_ARRAY]: [],
}[type]);
const setter = function setter(target, path, value) {
    let part, context = target;
    const parts = parse(path);
    while ((part = parts.shift())) {
        const { name, type } = part;
        if (!name && Array.isArray(context)) {
            // push item in the end of array
            context = context[context.length] = parts.length && type ? createNode(type) : value;
        }
        else {
            context = context[name] = parts.length && type ? context[name] || createNode(type) : value;
        }
    }
};
exports.setter = setter;
