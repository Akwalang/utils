type Comparator<T> = (a: T, b: T) => boolean;

declare function union<T>(comparator: Comparator<T>, ...arrays: T[][]): T[];

export default union;
