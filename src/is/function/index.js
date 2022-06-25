import getType from '../../types/get/index.js';

export default function isFunction(value) {
  return getType(value) === 'Function';
}
