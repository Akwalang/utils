import capitalize from '../capitalize';

export default function capitalizeAll(string: string): string {
  return string.split(' ').map(capitalize).join(' ');
}
