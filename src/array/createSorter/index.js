import isArray from '../../is/array/index.js';
import isString from '../../is/string/index.js';
import isFunction from '../../is/function/index.js';

import getter from '../../object/getter/index.js';

const SORTER_COMPARATOR = (a, b, m) => {
  if (a > b) return  1 * m;
  if (a < b) return -1 * m;

  return 0;
};

const createGetter = (field) =>
  field.includes('.') || field.includes('[')
    ? item => getter(item, field)
    : item => item[field];

export default function createSorter(keys = null, dirs = 'asc') {
  dirs = isArray(dirs) ? dirs : dirs.split(',');

  const multiplier = dirs.map(dir => ({ asc: 1 , desc: -1 }[dir.trim()] || 1));

  if (keys === null) {
    return (a, b) => SORTER_COMPARATOR(a, b, multiplier[0]);
  }

  let fields = [];

  if (isFunction(keys)) {
    fields = [(a, b) => keys(a, b) * multiplier];
  }

  if (isString(keys)) {
    const items = keys.split(',').map(f => f.trim());

    fields = items.map(createGetter);
  }

  if (isArray(keys)) {
    fields = keys.map(field => {
      if (isString(field)) return createGetter(field);
      if (isFunction(field)) return field;

      return () => 0;
    });
  }

  return (a, b) => {
    let result = 0;

    for (let field, i = 0; field = fields[i]; i++) {
      result = SORTER_COMPARATOR(field(a), field(b), multiplier[i] || multiplier[0]);

      if (result) break;
    }

    return result;
  };
};
