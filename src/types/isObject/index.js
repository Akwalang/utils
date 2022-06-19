import getType from '../get/index.js';

export default function isObject(value) {
  return getType(value) === 'Object';
}
