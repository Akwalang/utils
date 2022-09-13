import isNumber from '../../is/number';
import isUndefined from '../../is/undefined';
import isAsyncFunction from '../../is/asyncFunction';

type SyncTransform<T> = (i: number) => T;
type AsyncTransform<T> = (i: number) => Promise<T>;

const crateRange = (from: number, to: number, step: number) => {
  const result = [];

  step = (from < to ? 1 : -1) * Math.abs(+step || 1);

  const compare = from < to
    ? (i: number) => i <= to
    : (i: number) => i >= to;

  for (let i = from; compare(i); i += step) {
    result.push(i);
  }

  return result;
};

const createValues = <T = number>(count: number, callback?: SyncTransform<T>): T[] => {
  callback = callback ? callback : ((i: number): number => i) as unknown as SyncTransform<T>;

  return [...new Array(count)].map((v, i) => callback!(i));
};

const createAsyncValues = <T>(count: number, callback: AsyncTransform<T>): Promise<T[]> => {
  const stack = [...new Array(count)].map((v, i) => callback(i));

  return Promise.all(stack);
};

function create(count: number): number[];
function create<T>(count: number, value: SyncTransform<T>): T[];
function create<T>(count: number, value: AsyncTransform<T>): Promise<T[]>;
function create(from: number, to?: number, step?: number): number[];
function create<T>(from: number, to?: number | SyncTransform<T> | AsyncTransform<T>, step?: number) {
  if (isNumber(from)) {
    if (isUndefined(to)) {
      return createValues(from);
    }

    if (isNumber(to)) {
      return crateRange(from, to, step || 1);
    }

    if (isAsyncFunction(to)) {
      return createAsyncValues(from, to as AsyncTransform<T>);
    }

    if (typeof to === 'function') {
      return createValues(from, to);
    }
  }

  throw new Error('array.create received wrong arguments: ' + [...arguments]);
}

export default create;
