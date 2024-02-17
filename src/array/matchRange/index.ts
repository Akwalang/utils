const DEFAULT_GETTER = (v: any): number => v;

export const matchRange = function matchRange<T, F = undefined>(
  array: T[],
  fallback?: F,
  getValue: typeof DEFAULT_GETTER = DEFAULT_GETTER,
): [number, number] | F {
  if (!array.length) return fallback as F;

  return array.reduce((result, item) => {
    const value = getValue(item);

    const min = Math.min(result[0], value);
    const max = Math.max(result[1], value);

    return [min, max];
  }, [Infinity, -Infinity]);
};
