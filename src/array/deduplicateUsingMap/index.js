export default function deduplicateUsingMap(target, getId = v => v) {
  const map = {};

  for (let i = 0, len = target.length; i < len; i++) {
    const id = getId(target[i]);

    if (id in map) continue;

    map[id] = target[i];
  }

  return Object.values(map);
};
