import capitalize from '../capitalize/index.js';

export default function capitalizeAll(string) {
  return string.split(' ').map(capitalize).join(' ');
}
