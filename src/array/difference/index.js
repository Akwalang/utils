import { DEFAULT_COMPARATOR } from '../utils.js';

export default function difference(a, b, getter = DEFAULT_COMPARATOR) {
  const comparator = getter.length === 2 ? getter : (a, b) => getter(a) === getter(b);

  return a.filter(av => !b.find(bv => comparator(av, bv)));
};
