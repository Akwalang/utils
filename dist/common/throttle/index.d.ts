declare type ThrottleCallback<T> = (stack: T[]) => void;
declare type Throttler<T extends Array<any>> = {
    (...args: T): void;
    flush: () => void;
    destroy: () => void;
};
export declare const throttle: <T extends any[]>(callback: ThrottleCallback<T>, delay: number, delayMin?: number, delayMax?: number) => Throttler<T>;
export {};
