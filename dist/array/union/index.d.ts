declare function union<T>(...arrays: T[][]): T[];
declare function union<T>(getter: (v: T) => any, ...arrays: T[][]): T[];
export { union };
