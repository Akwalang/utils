type Resolve<T> = (value?: T | PromiseLike<T>) => void;
type Reject = (reason?: any) => void;

type Deferred<T> = Promise<T> & { resolve: Resolve<T>, reject: Reject };

export = function deferred<T = void>(
  callback?: (resolve: Resolve<T>, reject: Reject, deferred: Deferred<T>) => void
): Deferred<T> {
  let resolve: Resolve<T>, reject: Reject;

  const promise = new Promise<T>((res, rej) => {
    resolve = res as Resolve<T>;
    reject = rej;
  }) as Deferred<T>;

  promise.resolve = resolve!;
  promise.reject = reject!;

  callback && callback(promise.resolve, promise.reject, promise);

  return promise;
};
