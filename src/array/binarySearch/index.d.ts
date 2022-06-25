type Comparator<T, V> = (a: T, b: V) => boolean;
type Side = -1 | 0 | 1;

declare function binarySearch<T, V>(array: T[], value: V, comparator: Comparator<T, V>, side: Side): number;

export default binarySearch;
