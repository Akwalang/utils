import isNaN from '../nan/index.js';
import isDate from '../date/index.js';
import isArray from '../array/index.js';
import isObject from '../object/index.js';

const _hasOwnProperty = Object.prototype.hasOwnProperty;

export default function isEqual(a, b) {
  if (isNaN(a) && isNaN(b)) return true;
  if (isDate(a) && isDate(b)) return +a === +b;

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0, len = a.length; i < len; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }

    return true;
  }

  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (let name in a) {
      if (!_hasOwnProperty.call(a, name)) continue;
      if (!isEqual(a[name], b[name])) return false;
    }

    return true;
  }

  return a === b;
}
