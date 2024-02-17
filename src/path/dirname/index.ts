import { dirname as getDirname } from 'path';
import { fileURLToPath } from 'url';

export const dirname = function dirname(meta: { url: string }): string {
  const path = meta.url.indexOf('///') !== -1 ? fileURLToPath(meta.url) : meta.url;

  return getDirname(path);
};
