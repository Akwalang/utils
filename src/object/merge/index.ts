import clone from '../clone';
import isPlainObject from '../../is/plainObject';

const { hasOwnProperty } = Object.prototype;

type RecordAny = Record<any, any>;

export = function merge<A extends RecordAny, B extends RecordAny>(dest: A, src: B): A & B {
  for (const name in src) {
    if (!hasOwnProperty.call(src, name)) continue;

    const _src = isPlainObject(src[name]);
    const _dest = isPlainObject(dest[name]);

    if (_src && _dest) {
      dest[name] = merge({ ...dest[name] }, src[name]);
    } else {
      dest[name] = clone(src[name]);
    }
  }

  return dest;
}
