import { getType } from '../../types/getType';

export const isString = function isString(value: any): value is string {
  return getType(value) === 'String';
};
