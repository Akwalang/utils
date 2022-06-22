type GetId<T> = () => T;

declare function idGenerator(prefix?: null, postfix?: null): GetId<number>;
declare function idGenerator(prefix?: string, postfix?: string): GetId<string>;

export default idGenerator;
