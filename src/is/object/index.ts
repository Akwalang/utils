import { getType } from '../../types/getType';

export const isObject = function isObject(value: any): value is Record<any, any> {
  return getType(value) === 'Object';
};
