const toString = Object.prototype.toString;

export default function get(value) {
  return toString.call(value).slice(8, -1);
}
