import isNumber from '../../is/number/index.js';
import isFunction from '../../is/function/index.js';
import isUndefined from '../../is/undefined/index.js';
import isAsyncFunction from '../../is/asyncFunction/index.js';

const crateRange = (from, to, step) => {
  const result = [];

  step = (from < to ? 1 : -1) * Math.abs(+step || 1);

  const compare = from < to ? i => i <= to : i => i >= to;

  for (let i = from; compare(i); i += step) {
    result.push(i);
  }

  return result;
};

const createValues = (count, callback = i => i) => {
  return [...new Array(count)].map((v, i) => callback(i));
};

const createAsyncValues = (count, callback) => {
  const stack = [...new Array(count)].map((v, i) => callback(i));

  return Promise.all(stack);
};

export default function create(from, to, step) {
  if (isNumber(from)) {
    if (isUndefined(to)) {
      return createValues(from);
    }

    if (isNumber(to)) {
      return crateRange(from, to, step);
    }

    if (isFunction(to)) {
      return createValues(from, to);
    }

    if (isAsyncFunction(to)) {
      return createAsyncValues(from, to);
    }
  }

  throw new Error('array.create received wrong arguments: ' + [...arguments]);
}
