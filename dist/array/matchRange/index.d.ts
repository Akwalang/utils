declare const DEFAULT_GETTER: (v: any) => number;
export declare const matchRange: <T, F = undefined>(array: T[], fallback?: F | undefined, getValue?: typeof DEFAULT_GETTER) => [number, number] | F;
export {};
