export = function matchAll(reg: RegExp, string: string): RegExpMatchArray[] {
  if (!reg.global) throw new Error('RegExp must have the global modifier');

  const result = [];

  let match;

  while ((match = reg.exec(string))) {
    result.push(match);
  }

  return result;
}
