import { capitalize } from '../capitalize';

export const capitalizeAll = function capitalizeAll(string: string): string {
  return string.split(' ').map(capitalize).join(' ');
};
