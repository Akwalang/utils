"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idGenerator = void 0;
function idGenerator(prefix, postfix) {
    let id = 0;
    let max = Infinity;
    prefix = prefix || '';
    postfix = postfix || '';
    const next = () => {
        const res = !prefix && !postfix ? id : [prefix, id, postfix].join('');
        id = (id + 1) % (max + 1);
        return res;
    };
    next.setMax = (top) => (max = top, next);
    return next;
}
exports.idGenerator = idGenerator;
;
