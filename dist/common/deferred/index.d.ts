declare type Resolve<T> = (value?: T | PromiseLike<T>) => void;
declare type Reject = (reason?: any) => void;
declare type Deferred<T> = Promise<T> & {
    resolve: Resolve<T>;
    reject: Reject;
};
export declare const deferred: <T = void>(callback?: ((resolve: Resolve<T>, reject: Reject, deferred: Deferred<T>) => void) | undefined) => Deferred<T>;
export {};
