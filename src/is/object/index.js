import getType from '../../types/get/index.js';

export default function isObject(value) {
  return getType(value) === 'Object';
}
