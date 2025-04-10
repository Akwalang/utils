type GetId<T> = (value: T) => string | number | T;

export const deduplicate = function deduplicate<T>(
  target: T[],
  getId: GetId<T> = value => value,
): T[] {
  const map = new Map<string | number | T, T>();

  for (let i = 0, len = target.length; i < len; i++) {
    const id = getId(target[i]);

    !map.has(id) && map.set(id, target[i]);
  }

  return Array.from(map.values());
};
