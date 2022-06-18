export default function parse(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};
