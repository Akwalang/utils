export default function shuffle<T>(array: T[]): T[] {
  array = [...array];

  for (let i = 0, len = array.length; i < len; i++) {
    const j = Math.floor(Math.random() * len);

    [array[j], array[i]] = [array[i], array[j]];
  }

  return array;
};
