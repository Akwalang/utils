"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * callsites function from npm package callsites
 * author: Sindre Sorhus
 * link: https://www.npmjs.com/package/callsites
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStack = void 0;
function callsites() {
    // @ts-ignore
    const _prepareStackTrace = Error.prepareStackTrace;
    // @ts-ignore
    Error.prepareStackTrace = (_, stack) => stack;
    // @ts-ignore
    const stack = new Error().stack.slice(1);
    // @ts-ignore
    Error.prepareStackTrace = _prepareStackTrace;
    // @ts-ignore
    return stack;
}
const getStack = function getStack(from, to) {
    let [, ...stack] = callsites();
    stack = stack.slice(from, to);
    return stack.map(item => {
        let file = item.getFileName();
        file = file && file.split('\\').join('/');
        return { file };
    });
};
exports.getStack = getStack;
