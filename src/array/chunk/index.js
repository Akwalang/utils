export default function chunk(array, size) {
  size = Math.max(size, 1);

  const result = [];

  for (let i = 0, len = array.length; i < len; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
