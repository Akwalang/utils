declare function isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;

export default isAsyncFunction;
