type Comparator<T> = (a: T, b: T) => boolean;

declare function intersection<T>(comparator: Comparator<T>, ...arrays: T[][]): T[];
declare function intersection<T>(...arrays: T[][]): T[];

export default intersection;
