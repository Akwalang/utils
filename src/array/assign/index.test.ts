import { assign } from '.';

test('Array.assign', () => {
  const array = [
    { name: 'first', value: 1 },
    { name: 'second', value: 2 },
    { name: 'third', value: 3 },
  ];

  const object = assign(array, item => ({ [item.name]: item.value }));

  expect(object).toEqual({
    first: 1,
    second: 2,
    third: 3,
  });
});
