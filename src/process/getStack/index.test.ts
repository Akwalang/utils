import first from './mock/1_first';

test('Process.getStack', () => {
  const result = first().map(item => {
    return { file: item.file.replace(/^.*\/src/i, '/src') };
  });

  expect(result).toEqual([
    { file: '/src/process/getStack/mock/4_fourth.ts' },
    { file: '/src/process/getStack/mock/3_third.ts' },
    { file: '/src/process/getStack/mock/2_second.ts' },
    { file: '/src/process/getStack/mock/1_first.ts' },
  ]);
});
