type Comparator<T> = (item: T) => boolean;
type Side = -1 | 0 | 1;

declare function binarySearch<T>(array: T[], value: any | Comparator<T>, side: Side): number;

export default binarySearch;
