import shuffle from '.';

test('Array.shuffle', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const shuffled = shuffle(array);

  expect(array).not.toEqual(shuffled);
  expect(shuffled).toEqual(expect.arrayContaining(array));
});
