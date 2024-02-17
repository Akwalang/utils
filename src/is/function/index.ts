import { getType } from '../../types/getType';

export const isFunction = function isFunction(value: any): value is Function {
  return getType(value) === 'Function';
};
