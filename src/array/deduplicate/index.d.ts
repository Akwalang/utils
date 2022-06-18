type Comparator<T> = (a: T, b: T) => boolean;

declare function deduplicate<T>(target: T[], comparator?: Comparator<T>): T[];

export default deduplicate;
