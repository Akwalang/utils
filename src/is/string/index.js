import getType from '../../types/get/index.js';

export default function string(value) {
  return getType(value) === 'String';
}
