import stat from '../../path/stat/index.js';

export default async function isExists(...target) {
  try {
    const stt = await stat(target);

    return stt.isDirectory();
  } catch (e) {
    return false;
  }
}
