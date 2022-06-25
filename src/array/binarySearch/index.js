import isNaN from '../../is/nan/index.js';
import isFunction from '../../is/function/index.js';

const createComparator = value => item => {
  if (item === value) return 0;

  if (item < value) return 1;
  if (item > value) return -1;
};

const middle = (from, to) => Math.floor((from + to) / 2);

export default function binarySearch(array, value, side = 0) {
  let from = 0;
  let to = array.length - 1;

  const comparator = isFunction(value) ? value : createComparator(value);

  const mid = middle(from, to);
  const check = isFunction(value) && comparator(array[mid], value);

  if (isNaN(+check)) {
    throw new Error('array.binarySearch: comparator should return number value');
  }

  let result = -1;

  while (from <= to) {
    const idx = middle(from, to);

    const r = comparator(array[idx]);

    if (isNaN(+r)) break;

    if (r === 0) {
      result = idx;

      if (side < 0) to = idx - 1;
      else if (side > 0) from = idx + 1;
      else break;
    }

    else if (r > 0) from = idx + 1;
    else if (r < 0) to = idx - 1;
  }

  return result;
}
