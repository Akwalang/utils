declare function iterator(reg: RegExp, str: string): Generator<RegExpExecArray, void, unknown>;

export default iterator;
