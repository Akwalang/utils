import throttle from './index.js';
import deferred from '../deferred/index.js';

test('Common.throttle: delay only', async () => {
  const start = +new Date();

  const stack = await new Promise(resolve => {
    const throttler = throttle((stack) => resolve(stack), 500);

    throttler(1);

    setTimeout(() => throttler(2), 10);
    setTimeout(() => throttler(3), 20);
    setTimeout(() => throttler(4), 40);
    setTimeout(() => throttler(5), 60);
    setTimeout(() => throttler(6), 80);
    setTimeout(() => throttler(7), 100);
  });

  const end = +new Date();

  expect(end - start).toBeGreaterThanOrEqual(500);
  expect(end - start).toBeLessThan(550);

  expect(stack).toEqual([1, 2, 3, 4, 5, 6, 7].map(v => [v]));
});

test('Common.throttle: delay step and min/max delays', async () => {
  const start = +new Date();

  let idx = 0;
  const throttler = throttle((stack) => [stack_1, stack_2][idx++].resolve(stack), 50, 500, 1000);

  let stack_1 = deferred(() => {
    throttler(1);

    setTimeout(() => throttler(2), 100);
    setTimeout(() => throttler(3), 200);
    setTimeout(() => throttler(4), 400);
  });

  let stack_2 = deferred(() => {
    setTimeout(() => throttler(5), 600);
    setTimeout(() => throttler(6), 800);
    setTimeout(() => throttler(7), 1000);
  });

  [stack_1, stack_2] = await Promise.all([stack_1, stack_2]);

  const end = +new Date();

  expect(end - start).toBeGreaterThanOrEqual(1000);
  expect(end - start).toBeLessThan(1200);

  expect(stack_1).toEqual([1, 2, 3, 4].map(v => [v]));
  expect(stack_2).toEqual([5, 6, 7].map(v => [v]));
});
