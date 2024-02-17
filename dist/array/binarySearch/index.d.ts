declare type Comparator<T> = (item: T) => number;
declare type Side = -1 | 0 | 1;
export declare const binarySearch: <T>(array: T[], value: T | Comparator<T>, side?: Side) => number;
export {};
