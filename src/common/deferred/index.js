export default function deferred(callback) {
  let resolve, reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;

    callback && callback(res, rej);
  });

  promise.resolve = resolve;
  promise.reject = reject;

  return promise;
};
