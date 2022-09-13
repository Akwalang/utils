import path from 'path';

export default function resolve(...paths: (string | string[])[]): string {
  const flat = paths.flat(Infinity) as string[];

  return path.resolve(...flat);
}
