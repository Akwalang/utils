import { getType } from '../../types/getType';

export const isNumber = function isNumber(value: any): value is number {
  return getType(value) === 'Number';
};
