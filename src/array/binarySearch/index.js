import isNaN from '../../is/nan/index.js';
import isFunction from '../../is/function/index.js';

const createComparator = value => item => {
  if (item === value) return 0;

  if (item < value) return 1;
  if (item > value) return -1;
};

const middle = (from, to) => Math.floor((from + to) / 2);

export default function binarySearch(array, value) {
  let from = 0;
  let to = array.length - 1;

  const comparator = isFunction(value) ? value : createComparator(value);

  const mid = middle(from, to);
  const check = isFunction(value) && comparator(array[mid], value);

  if (isNaN(+check)) {
    throw new Error('array.binarySearch: comparator should return number value');
  }

  while (from <= to) {
    const idx = middle(from, to);

    const r = comparator(array[idx]);

    if (isNaN(+r)) break;

    if (r === 0) return idx;

    if (r > 0) from = idx + 1;
    if (r < 0) to = idx - 1;
  }

  return -1;
}
