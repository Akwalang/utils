declare type GetId<T> = (value: T) => string | number | T;
export declare const deduplicate: <T>(target: T[], getId?: GetId<T>) => T[];
export {};
