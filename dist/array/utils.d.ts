export declare type Comparator<T> = (a: T, b: T) => boolean;
export declare const isComparator: (worker: any) => worker is Comparator<any>;
export declare const DEFAULT_COMPARATOR: Comparator<any>;
