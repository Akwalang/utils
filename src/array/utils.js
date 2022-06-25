import isNaN from '../is/nan/index.js';

export const DEFAULT_COMPARATOR = (a, b) => a === b || isNaN(a) && isNaN(b);
