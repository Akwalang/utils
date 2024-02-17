"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deferred = void 0;
const deferred = function deferred(callback) {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    promise.resolve = resolve;
    promise.reject = reject;
    callback && callback(promise.resolve, promise.reject, promise);
    return promise;
};
exports.deferred = deferred;
