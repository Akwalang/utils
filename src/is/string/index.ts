import getType from '../../types/get';

export = function string(value: any): value is string {
  return getType(value) === 'String';
}
