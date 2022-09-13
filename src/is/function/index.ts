import getType from '../../types/get';

export = function isFunction(value: any): value is Function {
  return getType(value) === 'Function';
}
