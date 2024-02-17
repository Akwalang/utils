declare type RecordAny = Record<any, any>;
export declare const merge: <A extends RecordAny, B extends RecordAny>(dest: A, src: B) => A & B;
export {};
