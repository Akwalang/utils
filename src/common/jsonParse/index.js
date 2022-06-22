export default function jsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return arguments.length >= 2 ? fallback : value;
  }
};
