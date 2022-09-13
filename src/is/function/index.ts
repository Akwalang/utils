import getType from '../../types/get';

export default function isFunction(value: any): value is Function {
  return getType(value) === 'Function';
}
