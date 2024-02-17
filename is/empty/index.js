"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const object_1 = require("../object");
const array_1 = require("../array");
const nil_1 = require("../nil");
const isEmpty = function isEmpty(value, strait = true) {
    if ((0, nil_1.isNil)(value) || value === '')
        return true;
    value = (0, object_1.isObject)(value) ? Object.values(value) : value;
    if ((0, array_1.isArray)(value)) {
        return strait ? !value.length : value.every(item => isEmpty(item, false));
    }
    return false;
};
exports.isEmpty = isEmpty;
