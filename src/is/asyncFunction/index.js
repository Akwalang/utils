import getType from '../../types/get/index.js';

export default function isAsyncFunction(value) {
  return getType(value) === 'AsyncFunction';
}
