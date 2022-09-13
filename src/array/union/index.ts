import { type Comparator, isComparator } from '../utils';

import deduplicate from '../deduplicate';

function union<T>(...arrays: T[][]): T[];
function union<T>(comparator: Comparator<T>, ...arrays: T[][]): T[];
function union<T>(comparator: Comparator<T> | T[], ...arrays: T[][]): T[] {
  const items = isComparator(comparator) ? arrays : [comparator, ...arrays] as T[][];
  const compare = isComparator(comparator) ? comparator : undefined;

  return deduplicate(items.flat(), compare);
}

export default union;
