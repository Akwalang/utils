const DEFAULT_GETTER = (v: any): number => v;

export const matchRange = function matchRange<T, F = undefined>(
  array: T[],
  fallback?: F,
  getValue: typeof DEFAULT_GETTER = DEFAULT_GETTER,
): [number, number] | F {
  if (!array.length) return fallback as F;

  return array.reduce((result, item) => {
    const value = getValue(item);

    const min = result[0] < value ? result[0] : value;
    const max = result[1] > value ? result[1] : value;

    return [min, max];
  }, [Infinity, -Infinity]);
};
