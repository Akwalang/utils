const DEFAULT_GETTER = (a, b) => a === b;

export default function difference(a, b, getter = DEFAULT_GETTER) {
  const comparator = getter.length === 2 ? getter : (a, b) => getter(a) === getter(b);

  return a.filter(av => !b.find(bv => comparator(av, bv)));
};
