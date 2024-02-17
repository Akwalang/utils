declare type Getter<T, R> = (item: T, i: number) => undefined | null | R;
export declare const assign: <T, R extends {}>(array: T[], getter: Getter<T, R>, accumulator?: R | undefined) => R;
export {};
