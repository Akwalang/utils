"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const getStack_1 = require("../../process/getStack");
const dirname_1 = require("../../path/dirname");
const filename_1 = require("../../path/filename");
const write_1 = require("../../file/write");
const string_1 = require("../../is/string");
const write = function write(data, name) {
    const url = (0, getStack_1.getStack)(1, 2)[0].file;
    const dir = (0, dirname_1.dirname)({ url });
    const file = (0, filename_1.filename)({ url });
    name = name || file.replace(/(\.jsx?|\.tsx?)$/, '');
    const target = `${name}.__debug__.json`;
    const string = (0, string_1.isString)(data) ? data : JSON.stringify(data, null, '  ');
    return (0, write_1.write)([dir, target], string);
};
exports.write = write;
