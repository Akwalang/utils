import stat from '../../path/stat';

export = async function isExists(...target: (string | string[])[]): Promise<boolean> {
  try {
    const stt = await stat(...target);

    return !!stt && stt.isDirectory();
  } catch (e) {
    return false;
  }
}
