import isObject from '../../is/object';

export default function merge(dest, src) {
  for (let name in src) {
    if (!src.hasOwnProperty(name)) continue;

    const _src = isObject(src[name]);
    const _dest = isObject(dest[name]);

    if (_src && _dest) {
      dest[name] = merge({ ...dest[name] }, src[name]);
    } else {
      dest[name] = _src ? { ...src[name] } : src[name];
    }
  }

  return dest;
}
