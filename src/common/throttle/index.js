export default function throttle(callback, delay, delayMin, delayMax) {
  delayMin = delayMin || delay;
  delayMax = delayMax || delayMin;

  let [start, timer, stack] = [null, null, []];

  const notify = () => {
    callback(stack);

    [start, timer, stack] = [null, null, []];
  };

  const throttler = function throttler(...args) {
    stack.push(args);

    const now = +new Date();

    start = start || now;

    const elapsed = now - start;
    const remain = delayMax - elapsed;

    const nextDelay = Math.max(delayMin - elapsed, delay);

    if (remain >= nextDelay) {
      clearTimeout(timer);

      timer = setTimeout(notify, nextDelay);
    }
  };

  throttler.destroy = () => {
    clearTimeout(timer);

    [start, timer, stack] = [null, null, []];
  };

  return throttler;
}
