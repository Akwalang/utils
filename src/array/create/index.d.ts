declare function create(count: number): number[];
declare function create<T>(count: number, value: (i: number) => T): T[];
declare function create<T>(count: number, value: (i: number) => Promise<T>): Promise<T[]>;
declare function create(from: number, to?: number, step?: number): number[];

export default create;
