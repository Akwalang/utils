import getType from '../../types/get/index.js';

export default function number(value) {
  return getType(value) === 'Number';
}
