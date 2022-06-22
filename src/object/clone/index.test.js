import clone from './index.js';

test('Object.clone', async () => {
  const data = {
    a: 10,
    b: true,
    c: null,
    d: undefined,
    e: NaN,
    f: [1, 2, 3, 4],
    g: { a: 1, b: 2, c: { name: 123 } },
    h: new Date(),
  };

  await new Promise(r => setTimeout(r, 1000));

  const twin = clone(data);

  let correct = true;

  correct = correct && data.a === twin.a;
  correct = correct && data.b === twin.b;
  correct = correct && data.c === twin.c;
  correct = correct && data.d === twin.d;
  correct = correct && isNaN(twin.e);
  correct = correct && data.f !== twin.f;
  correct = correct && data.f.join() === twin.f.join();
  correct = correct && data.g !== twin.g;
  correct = correct && data.g.a === twin.g.a;
  correct = correct && data.g.b === twin.g.b;
  correct = correct && data.g.c !== twin.g.c;
  correct = correct && data.g.c.name === twin.g.c.name;
  correct = correct && +data.h === +twin.h;

  expect(correct).toBe(true);

  expect(twin).toEqual({
    a: 10,
    b: true,
    c: null,
    d: undefined,
    e: NaN,
    f: [1, 2, 3, 4],
    g: { a: 1, b: 2, c: { name: 123 } },
    h: new Date(data.h),
  });
});
