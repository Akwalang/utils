import isFunction from '../../is/function';

import { DEFAULT_COMPARATOR } from '../utils.js';

export default function intersection(comparator, ...arrays) {
  if (!isFunction(comparator)) {
    [comparator, ...arrays] = [DEFAULT_COMPARATOR, comparator, ...arrays];
  }

  return arrays[0].filter(a => {
    for (let i = 1, len = arrays.length; i < len; i++) {
      const item = arrays[i].find(b => comparator(a, b));

      if (!item) return false;
    }

    return true;
  });
}
