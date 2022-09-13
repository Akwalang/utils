import getType from '../../types/get';

export = function isObject(value: any): value is Record<any, any> {
  return getType(value) === 'Object';
}
