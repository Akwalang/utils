import isNaN from '../../is/nan';
import isFunction from '../../is/function';

type Comparator<T> = (item: T) => number;
type Side = -1 | 0 | 1;

const createComparator= <T>(value: T) => (item: T): number => {
  if (item < value) return 1;
  if (item > value) return -1;

  return 0;
};

const middle = (from: number, to: number) => Math.floor((from + to) / 2);

export = function binarySearch<T>(array: T[], value: T | Comparator<T>, side: Side = 0) {
  let from = 0;
  let to = array.length - 1;

  const comparator = isFunction(value) ? value : createComparator(value);

  const mid = middle(from, to);
  const check = isFunction(value) && comparator(array[mid]);

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
