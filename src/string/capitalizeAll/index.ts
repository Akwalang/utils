import capitalize from '../capitalize';

export = function capitalizeAll(string: string): string {
  return string.split(' ').map(capitalize).join(' ');
}
