import getType from '../../types/get';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Constructor = (async () => {}).constructor;

type AsyncFunction = typeof Constructor;

export = function isAsyncFunction(value: unknown): value is AsyncFunction {
  return getType(value) === 'AsyncFunction';
}
