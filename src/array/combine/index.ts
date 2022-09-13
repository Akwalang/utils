type Keys = string | number | symbol;

export = function combine<K extends Keys, V>(keys: K[], values: V[]): Record<K, V> {
  return keys.reduce((result, key, i) => {
    result[key] = values[i];

    return result;
  }, {} as Record<K, V>);
}
