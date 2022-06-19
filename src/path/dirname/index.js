import { dirname as getDirname } from 'path';
import { fileURLToPath } from 'url';

export default function dirname(meta) {
  const path = meta.url.indexOf('///') !== -1 ? fileURLToPath(meta.url) : meta.url;

  return getDirname(path);
}
