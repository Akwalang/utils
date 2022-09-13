type GetId<T> = (value: T) => string | number | T;

export default function deduplicateUsingMap<T>(
  target: T[],
  getId: GetId<T> = value => value,
): T[] {
  const map: Record<any, any> = {};

  for (let i = 0, len = target.length; i < len; i++) {
    const id = '' + getId(target[i]);

    if (id in map) continue;

    map[id] = target[i];
  }

  return Object.values(map);
};

