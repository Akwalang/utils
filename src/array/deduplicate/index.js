import { DEFAULT_COMPARATOR } from '../utils.js';

export default function deduplicate(target, comparator) {
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
