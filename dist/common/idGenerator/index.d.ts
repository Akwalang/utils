declare type NextId<T> = {
    (): T;
    setMax(top: number): NextId<T>;
};
declare function idGenerator(): NextId<number>;
declare function idGenerator(prefix: string, postfix?: string): NextId<string>;
declare function idGenerator(prefix: null | string, postfix: string): NextId<string>;
export { idGenerator as idGenerator };
