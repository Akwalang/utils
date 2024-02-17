import { isEqual } from '.';

test('Is.isEqual', () => {
  const date = new Date();

  const defaults = (extend = {}) => ({
    a: 11,
    b: true,
    c: null,
    d: undefined,
    e: NaN,
    f: [1, 2, 3, 4],
    g: { a: 1, b: 2, c: { name: 123 } },
    date: new Date(date),
    ...extend
  });

  const a = defaults();
  const b = defaults();
  const c = defaults({ a: 10 });
  const d = defaults({ b: false });
  const e = defaults({ c: 0 });
  const f = defaults({ d: null });
  const g = defaults({ e: false });
  const i = defaults({ f: [1, 2, 3, 4, 5] });
  const h = defaults({ g: { a: 1, b: 3, c: { name: 123 }, d: 1 } });
  const k = defaults({ g: { a: 1, b: 2, c: { name: 1234 } } });

  expect(isEqual(a, b)).toBe(true);
  expect(isEqual(NaN, NaN)).toBe(true);
  expect(isEqual([], [])).toBe(true);
  expect(isEqual(new Date(date), new Date(date))).toBe(true);

  expect(isEqual(a, c)).toBe(false);
  expect(isEqual(a, d)).toBe(false);
  expect(isEqual(a, e)).toBe(false);
  expect(isEqual(a, f)).toBe(false);
  expect(isEqual(a, g)).toBe(false);
  expect(isEqual(a, i)).toBe(false);
  expect(isEqual(a, h)).toBe(false);
  expect(isEqual(a, k)).toBe(false);
});
