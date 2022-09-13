import getType from '../../types/get';

export default function string(value: any): value is string {
  return getType(value) === 'String';
}
