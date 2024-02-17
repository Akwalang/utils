declare type Keys = string | number | symbol;
export declare const combine: <K extends Keys, V>(keys: K[], values: V[]) => Record<K, V>;
export {};
