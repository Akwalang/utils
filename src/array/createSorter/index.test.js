import createSorter from './index.js';

test('Array.sorter: default options', () => {
  const list = [6, 2, 4, 8, 1, 5, 7, 3];

  const sorter = createSorter();
  const result = [...list].sort(sorter);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Array.sorter: dir - desc', () => {
  const list = [6, 2, 4, 8, 1, 5, 7, 3];

  const sorter = createSorter(null, 'desc');
  const result = [...list].sort(sorter);

  expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
});

test('Array.sorter: by multiple fields with different directions', () => {
  const list = [
    { type: 'glass', count: 5 },
    { type: 'cup', count: 8 },
    { type: 'dish', count: 10 },
    { type: 'cup', count: 3 },
    { type: 'glass', count: 2 },
    { type: 'cup', count: 5 },
  ];

  const sorter = createSorter('type, count', 'desc, asc');
  const result = [...list].sort(sorter);

  expect(result).toEqual([
    { type: 'glass', count: 2 },
    { type: 'glass', count: 5 },
    { type: 'dish', count: 10 },
    { type: 'cup', count: 3 },
    { type: 'cup', count: 5 },
    { type: 'cup', count: 8 },
  ]);
});

test('Array.sorter: by multiple fields with processing', () => {
  const list = [
    { type: 'glass', count: 5 },
    { type: 'cup', count: 8 },
    { type: 'dish', count: 10 },
    { type: 'cup', count: 3 },
    { type: 'glass', count: 2 },
    { type: 'cup', count: 5 },
  ];

  const sorter = createSorter(
    [item => item.count % 2, item => item.count, item => item.type],
    ['asc', 'desc', 'desc']
  );

  const result = [...list].sort(sorter);

  expect(result).toEqual([
    { type: 'dish', count: 10 },
    { type: 'cup', count: 8 },
    { type: 'glass', count: 2 },
    { type: 'glass', count: 5 },
    { type: 'cup', count: 5 },
    { type: 'cup', count: 3 },
  ]);
});
