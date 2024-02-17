"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSorter = void 0;
const array_1 = require("../../is/array");
const string_1 = require("../../is/string");
const function_1 = require("../../is/function");
const getter_1 = require("../../object/getter");
const SORTER_COMPARATOR = (a, b, m) => {
    if (a > b)
        return 1 * m;
    if (a < b)
        return -1 * m;
    return 0;
};
const createGetter = (field) => field.includes('.') || field.includes('[')
    ? (item) => (0, getter_1.getter)(item, field)
    : (item) => item[field];
const isDir = (value) => value === 'asc' || value === 'desc';
const sliceDirections = (dirs) => {
    const items = dirs.split(',').map(item => item.trim());
    return items.map(dir => isDir(dir) ? dir : 'asc');
};
const direction2multiplier = (dir) => {
    if (dir === 'asc')
        return 1;
    if (dir === 'desc')
        return -1;
    return 1;
};
const createSorter = function createSorter(keys = null, dirs = 'asc') {
    const dirsList = (0, array_1.isArray)(dirs) ? dirs : sliceDirections(dirs);
    const multipliers = dirsList.map(direction2multiplier);
    if (keys === null) {
        return (a, b) => SORTER_COMPARATOR(a, b, multipliers[0]);
    }
    let fields = [];
    if ((0, function_1.isFunction)(keys))
        fields = [keys];
    if ((0, string_1.isString)(keys)) {
        const items = keys.split(',').map(f => f.trim());
        fields = items.map(createGetter);
    }
    if ((0, array_1.isArray)(keys)) {
        fields = keys.map(field => {
            if ((0, string_1.isString)(field))
                return createGetter(field);
            if ((0, function_1.isFunction)(field))
                return field;
            return () => 0;
        });
    }
    return (a, b) => {
        let result = 0;
        for (let field, i = 0; (field = fields[i]); i++) {
            result = SORTER_COMPARATOR(field(a), field(b), multipliers[i] || multipliers[0]);
            if (result)
                break;
        }
        return result;
    };
};
exports.createSorter = createSorter;
