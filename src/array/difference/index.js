import { DEFAULT_COMPARATOR } from '../utils.js';

export default function difference(a, b, comparator = DEFAULT_COMPARATOR) {
  const compare = comparator.length === 2
    ? comparator
    : (a, b) => DEFAULT_COMPARATOR(comparator(a), comparator(b));

  return a.filter(av => !b.find(bv => compare(av, bv)));
};
