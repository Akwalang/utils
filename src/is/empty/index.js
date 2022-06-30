import isObject from '../object/index.js';
import isArray from '../array/index.js';
import isNil from '../nil/index.js';

export default function empty(value, strait = true) {
  if (isNil(value)) return true;

  value = isObject(value) ? Object.values(value) : value;

  if (isArray(value)) {
    return strait ? !value.length : value.every(item => empty(item, false));
  }

  return false;
}
