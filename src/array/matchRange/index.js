const DEFAULT_GETTER = v => v;

export default function matchRange(array, fallback = [null, null], getter = DEFAULT_GETTER) {
  if (!array.length) return fallback;

  return array.reduce((result, item) => {
    const value = getter(item);

    const min = Math.min(result[0], value);
    const max = Math.max(result[1], value);

    return [min, max];
  }, [Infinity, -Infinity]);
}
