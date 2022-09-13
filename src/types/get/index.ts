type Types = 'Undefined' | 'Null' | 'Number' | 'String' | 'Boolean' | 'Symbol' | 'Array' | 'Object' | string;

const toString = Object.prototype.toString;

export default function get(value: any): Types {
  return toString.call(value).slice(8, -1);
}
