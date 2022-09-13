export default function iterator(reg: RegExp, str: string): Generator<RegExpExecArray, void, unknown> {
  if (!reg.global) throw new Error('RegExp must have the global modifier');

  const generator = function* regexpIterator() {
    let match = null;

    while((match = reg.exec(str))) {
      yield match;
    }
  };

  return generator();
}
