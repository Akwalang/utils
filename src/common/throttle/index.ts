type Timeout = ReturnType<typeof setTimeout>;

type ThrottleCallback<T> = (stack: T[]) => void;

type Throttler<T extends Array<any>> = {
  (...args: T): void;
  flush: () => void;
  destroy: () => void;
};

export const throttle = function throttle<T extends Array<any>>(
  callback: ThrottleCallback<T>,
  delay: number,
  delayMin?: number,
  delayMax?: number
): Throttler<T> {
  const dMin: number = delayMin || delay;
  const dMax: number = delayMax || dMin;

  let start: null | number = null;
  let next: null | number = null;
  let timer: null | Timeout = null;
  let stack: T[] = [];

  const notify = () => {
    callback(stack);

    [start, next, timer, stack] = [null, null, null, []];
  };

  const throttler: Throttler<T> = function throttler(...args: T) {
    stack.push(args);

    if (start !== null && next !== null && timer !== null && start + dMax <= next) return;

    const now = +new Date();

    start = start || now;

    const elapsed = now - start;
    const remain = dMax - elapsed;

    const nextDelay = Math.min(remain, Math.max(dMin - elapsed, delay));

    next = now + nextDelay;

    timer && clearTimeout(timer);

    timer = setTimeout(notify, nextDelay);
  };

  throttler.flush = () => {
    timer && clearTimeout(timer);

    notify();
  };

  throttler.destroy = () => {
    timer && clearTimeout(timer);

    [start, next, timer, stack] = [null, null, null, []];
  };

  return throttler;
};
