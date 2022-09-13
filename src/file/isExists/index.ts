import stat from '../../path/stat';

export default async function isExists(...target: (string | string[])[]): Promise<boolean> {
  try {
    const stt = await stat(...target);

    return !!stt && stt.isFile();
  } catch (e) {
    return false;
  }
}
