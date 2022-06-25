export default function combine(keys, values) {
  return keys.reduce((result, key, i) => {
    result[key] = values[i];

    return result;
  }, {});
}
