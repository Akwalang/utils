import random from '.';

import create from '../../array/create';
import difference from '../../array/difference';
import matchRange from '../../array/matchRange';

test('Common.random: floor true', () => {
  const result: Record<number, number> = {};
  const from = 10;
  const to = 19;
  const count = to - from + 1;
  const tries = 100_000;

  for (let i = 0; i < tries; i++) {
    const value = random(from, to, true);

    result[value] = (result[value] || 0) + 1;
  }

  const numbers = Object.keys(result).map(v => +v);
  const counters = Object.values(result);

  const diff = difference(numbers, create(from, to));

  const deviations = matchRange(counters, [0, 0]).map(v => Math.abs(v - tries / count) / tries / count * 100);

  const deviation = Math.max(...deviations);

  expect(diff.length).toBe(0);
  expect(deviation).toBeLessThan(2);
});
