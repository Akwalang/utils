export default function throttle(callback, delay, delayMin, delayMax) {
  delayMin = delayMin || delay;
  delayMax = delayMax || delayMin;

  let [start, next, timer, stack] = [null, null, null, []];

  const notify = () => {
    callback(stack);

    [start, next, timer, stack] = [null, null, null, []];
  };

  const throttler = function throttler(...args) {
    stack.push(args);

    if (start + delayMax <= next) return;

    const now = +new Date();

    start = start || now;

    const elapsed = now - start;
    const remain = delayMax - elapsed;

    const nextDelay = Math.min(remain, Math.max(delayMin - elapsed, delay));

    next = now + nextDelay;

    clearTimeout(timer);

    timer = setTimeout(notify, nextDelay);
  };

  throttler.flush = () => {
    clearTimeout(timer);

    notify();
  };

  throttler.destroy = () => {
    clearTimeout(timer);

    [start, next, timer, stack] = [null, null, null, []];
  };

  return throttler;
}
