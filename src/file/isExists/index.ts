import { stat } from '../../path/stat';

export const isExists = async function isExists(...target: (string | string[])[]): Promise<boolean> {
  try {
    const stt = await stat(...target);

    return !!stt && stt.isFile();
  } catch (e) {
    return false;
  }
};
