import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const filename = function filename(meta: { url: string }): string {
  const path = meta.url.indexOf('///') !== -1 ? fileURLToPath(meta.url) : meta.url;

  const dir = dirname(path);

  return path.replace(dir, '').slice(1);
};
