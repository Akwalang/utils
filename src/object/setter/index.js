const reg = /]\[|]\.|\.|]|\[/g;

const TYPE_OBJECT = 1;
const TYPE_ARRAY = 2;

const parse = (path) => {
  const result = [];

  let match = null;
  let name = null;
  let prev = 0;

  while (match = reg.exec(path)) {
    const { 0: splitter, index } = match;

    name = path.slice(prev, index);

    if ((prev || name) && prev !== path.length) {
      const type = {
        '.': TYPE_OBJECT,
        '[': TYPE_ARRAY,
      }[splitter.slice(-1)] || null;

      result.push({ name, type });
    }

    prev = index + splitter.length;
  }

  (name = path.slice(prev)) && result.push({ name, type: null });

  return result;
};

const createNode = type => ({
  [TYPE_OBJECT]: {},
  [TYPE_ARRAY]: [],
}[type]);

export default function setter(target, path, value) {
  let part, context = target;

  const parts = parse(path);

  while (part = parts.shift()) {
    if (!part.name && Array.isArray(context)) {
      context = context[context.length] = parts.length ? createNode(part.type) : value;
    } else {
      context = context[part.name] = parts.length ? context[part.name] || createNode(part.type) : value;
    }
  }
}
