import deduplicate from '../deduplicate/index.js';

import isFunction from '../../is/function/index.js';

export default function union(comparator, ...arrays) {
  if (!isFunction(comparator)) {
    [comparator, ...arrays] = [undefined, comparator, ...arrays];
  }

  return deduplicate([].concat(...arrays), comparator);
}
