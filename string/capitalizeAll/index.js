"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeAll = void 0;
const capitalize_1 = require("../capitalize");
const capitalizeAll = function capitalizeAll(string) {
    return string.split(' ').map(capitalize_1.capitalize).join(' ');
};
exports.capitalizeAll = capitalizeAll;
