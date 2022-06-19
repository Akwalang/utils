type Types = 'Undefined' | 'Null' | 'Number' | 'String' | 'Boolean' | 'Symbol' | 'Array' | 'Object' | string;

declare function get(value: any): Types;

export default get;
