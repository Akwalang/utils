import deduplicateUsingMap from './index.js';

test('Array.deduplicateUsingMap', () => {
  const list = [
    { itemId: 1, value: 'test #1'},
    { itemId: 2, value: 'test #2'},
    { itemId: 1, value: 'other test #1 value'},
    { itemId: 3, value: 'test #3'},
    { itemId: 2, value: 'other test #2 value'},
  ];

  const getId = (a) => a.itemId;

  const result = deduplicateUsingMap(list, getId);

  expect(result).toEqual([
    { itemId: 1, value: 'test #1'},
    { itemId: 2, value: 'test #2'},
    { itemId: 3, value: 'test #3'},
  ]);
});
