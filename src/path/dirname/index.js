import { dirname as getDirname } from 'path';
import { fileURLToPath } from 'url';

export default function dirname(meta) {
  return getDirname(fileURLToPath(meta.url));
}
