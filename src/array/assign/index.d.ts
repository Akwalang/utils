type Getter<T> = (item: T, i: number) => undefined | null | {};

declare function assign<T>(array: T, getter: Getter<T>): {};

export default assign;
