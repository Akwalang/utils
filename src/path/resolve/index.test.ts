import path from 'path';

import resolve from '.';

test('Path.resolve: strings', () => {
  const src = resolve('first', 'second', 'third');

  expect(src).toBe(path.resolve('first', 'second', 'third'));
});

test('Path.resolve: array', () => {
  const src = resolve(['first', 'second', 'third']);

  expect(src).toBe(path.resolve('first', 'second', 'third'));
});
