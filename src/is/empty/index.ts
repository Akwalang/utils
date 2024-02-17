import { isObject } from '../object';
import { isArray } from '../array';
import { isNil } from '../nil';

export const isEmpty = function isEmpty(value: any, strait = true): boolean {
  if (isNil(value) || value === '') return true;

  value = isObject(value) ? Object.values(value) : value;

  if (isArray(value)) {
    return strait ? !value.length : value.every(item => isEmpty(item, false));
  }

  return false;
};
