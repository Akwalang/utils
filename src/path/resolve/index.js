import path from 'path';

export default function resolve(...paths) {
  const flat = paths.flat(Infinity);

  return path.resolve(...flat);
}
