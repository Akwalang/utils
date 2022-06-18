const SORTER_COMPARATOR = (a, b, m) => {
  if (a > b) return  1 * m;
  if (a < b) return -1 * m;

  return 0;
};

export default function createSorter(keys = null, dirs = ['asc']) {
  dirs = Array.isArray(dirs) ? dirs : dirs.split(',');

  const mult = dirs.map(dir => ({ asc: 1 , desc: -1 }[dir.trim()] || 1));

  if (keys === null) {
    return (a, b) => SORTER_COMPARATOR(a, b, mult[0]);
  }

  let fields = [];

  if (typeof keys === 'function') {
    fields = [keys];
  }

  if (typeof keys === 'string') {
    const items = keys.split(',').map(f => f.trim());

    fields = items.map(field => item => item[field]);
  }

  if (Array.isArray(keys)) {
    fields = keys.map(field => ({
      string: item => item[field],
      function: field,
    }[typeof field] || (() => 0)));
  }

  return (a, b) => {
    let result = 0;

    for (let field, i = 0; field = fields[i]; i++) {
      result = SORTER_COMPARATOR(field(a), field(b), mult[i] || mult[0]);

      if (result) break;
    }

    return result;
  };
};
