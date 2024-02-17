declare type SyncTransform<T> = (i: number) => T;
declare type AsyncTransform<T> = (i: number) => Promise<T>;
declare function create(count: number): number[];
declare function create<T>(count: number, value: SyncTransform<T>): T[];
declare function create<T>(count: number, value: AsyncTransform<T>): Promise<T[]>;
declare function create(from: number, to?: number, step?: number): number[];
export { create as create };
