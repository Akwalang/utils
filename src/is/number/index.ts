import getType from '../../types/get';

export default function number(value: any): value is number {
  return getType(value) === 'Number';
}
