"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
const getter_1 = require("../../object/getter");
const reg = /<%=\s*([\w\-.[\]]+)\s*%>/ig;
const template = function template(str, params) {
    return str.replace(reg, (m, $1) => {
        const value = (0, getter_1.getter)(params, $1);
        return value !== undefined ? value : m;
    });
};
exports.template = template;
