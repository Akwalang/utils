"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
const date_1 = require("../../is/date");
const array_1 = require("../../is/array");
const plainObject_1 = require("../../is/plainObject");
const hop = Object.prototype.hasOwnProperty;
const TYPES = [Number, String, Boolean];
const clone = function clone(entity) {
    // null, undefined, NaN values check
    if (!entity)
        return entity;
    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    for (let i = 0, len = TYPES.length; i < len; i++) {
        if (entity instanceof TYPES[i])
            return TYPES[i](entity);
    }
    if ((0, array_1.isArray)(entity))
        return entity.map(value => clone(value));
    // if (isNode(entity)) return entity.cloneNode(true);
    if ((0, date_1.isDate)(entity))
        return new Date(+entity);
    if ((0, plainObject_1.isPlainObject)(entity)) {
        const result = {};
        for (const name in entity) {
            if (!hop.call(entity, name))
                continue;
            result[name] = clone(entity[name]);
        }
        return result;
    }
    return entity;
};
exports.clone = clone;
