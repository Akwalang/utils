export default function matchAll(reg, string) {
  if (!reg.global) throw new Error('RegExp must have the global modifier');

  const result = [];

  let match;

  while (match = reg.exec(string)) {
    result.push(match);
  }

  return result;
}
