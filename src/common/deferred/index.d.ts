type Resolve<T> = (value: T | PromiseLike<T>) => void;
type Reject = (reason?: any) => void;

declare function deferred<T>(
  callback: (resolve: Resolve<T>, reject: Reject) => void
): Promise<T> & { resolve: Resolve<T>, reject: Reject };

export default deferred;
