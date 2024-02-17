import { throttle } from '.';
import { deferred } from '../deferred';

test('Common.throttle: delay only', async () => {
  const start = +new Date();

  const stack = await new Promise(resolve => {
    const throttler = throttle<[number]>((stack) => resolve(stack), 500);

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

  const throttler = throttle<[number]>(
    (stack) => [stack_1, stack_2][idx++].resolve(stack)
    , 50, 500, 1000
  );

  const stack_1 = deferred<[number][]>(() => {
    throttler(1);

    setTimeout(() => throttler(2), 100);
    setTimeout(() => throttler(3), 200);
    setTimeout(() => throttler(4), 400);
  });

  const stack_2 = deferred<[number][]>(() => {
    setTimeout(() => throttler(5), 600);
    setTimeout(() => throttler(6), 800);
    setTimeout(() => throttler(7), 1000);
  });

  const [res_1, res_2] = await Promise.all([stack_1, stack_2]);

  const end = +new Date();

  expect(end - start).toBeGreaterThanOrEqual(1000);
  expect(end - start).toBeLessThan(1200);

  expect(res_1).toEqual([1, 2, 3, 4].map(v => [v]));
  expect(res_2).toEqual([5, 6, 7].map(v => [v]));
});
