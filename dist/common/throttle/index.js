"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
const throttle = function throttle(callback, delay, delayMin, delayMax) {
    const dMin = delayMin || delay;
    const dMax = delayMax || dMin;
    let start = null;
    let next = null;
    let timer = null;
    let stack = [];
    const notify = () => {
        callback(stack);
        [start, next, timer, stack] = [null, null, null, []];
    };
    const throttler = function throttler(...args) {
        stack.push(args);
        if (start !== null && next !== null && timer !== null && start + dMax <= next)
            return;
        const now = +new Date();
        start = start || now;
        const elapsed = now - start;
        const remain = dMax - elapsed;
        const nextDelay = Math.min(remain, Math.max(dMin - elapsed, delay));
        next = now + nextDelay;
        timer && clearTimeout(timer);
        timer = setTimeout(notify, nextDelay);
    };
    throttler.flush = () => {
        timer && clearTimeout(timer);
        notify();
    };
    throttler.destroy = () => {
        timer && clearTimeout(timer);
        [start, next, timer, stack] = [null, null, null, []];
    };
    return throttler;
};
exports.throttle = throttle;
