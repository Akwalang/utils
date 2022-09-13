import { type Comparator, DEFAULT_COMPARATOR } from '../utils';

export = function deduplicate<T>(target: T[], comparator?: Comparator<T>): T[] {
  comparator = comparator || DEFAULT_COMPARATOR;

  for (let i = 0; i < target.length - 1; i++) {
    for (let j = i + 1; j < target.length; j++) {
      if (comparator(target[i], target[j])) {
        target.splice(j--, 1);
      }
    }
  }

  return target;
};
