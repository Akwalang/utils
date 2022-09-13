import getType from '../../types/get';

export = function number(value: any): value is number {
  return getType(value) === 'Number';
}
