import { type Comparator, isComparator } from '../utils';

import { cyclicDeduplicate } from '../cyclicDeduplicate';

function union<T>(...arrays: T[][]): T[];
function union<T>(comparator: Comparator<T>, ...arrays: T[][]): T[];
function union<T>(comparator: Comparator<T> | T[], ...arrays: T[][]): T[] {
  const items = isComparator(comparator) ? arrays : [comparator, ...arrays] as T[][];
  const compare = isComparator(comparator) ? comparator : undefined;

  return cyclicDeduplicate(items.flat(), compare);
}

export { union as union };
