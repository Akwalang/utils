import deduplicate from '.';

test('Array.deduplicate: default comparator', () => {
  const list = [1, 2, 3, 1, 1, 'a', 'b', 'a', 'c', NaN, NaN, NaN, true, false, true];

  const result = deduplicate(list);

  expect(result).toEqual([1, 2, 3, 'a', 'b', 'c', NaN, true, false]);
});

test('Array.deduplicate: custom comparator', () => {
  type Item = { id: number, value: string };

  const list: Item[] = [
    { id: 1, value: 'test #1'},
    { id: 2, value: 'test #2'},
    { id: 1, value: 'other test #1 value'},
    { id: 3, value: 'test #3'},
    { id: 2, value: 'other test #2 value'},
  ];

  const comparator = (a: Item, b: Item): boolean => a.id === b.id;

  const result = deduplicate<Item>(list, comparator);

  expect(result).toEqual([
    { id: 1, value: 'test #1'},
    { id: 2, value: 'test #2'},
    { id: 3, value: 'test #3'},
  ]);
});
