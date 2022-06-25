export default function iterator(reg, str) {
  if (!reg.global) throw new Error('RegExp must have the global modifier');

  const generator = function* regexpIterator() {
    let match = null;

    while(match = reg.exec(str)) {
      yield match;
    }
  };

  return generator();
}
