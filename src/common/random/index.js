export default function random(lower, upper, floor = false) {
  const value = lower + (upper - lower + (floor ? 1 : 0)) * Math.random();

  return floor ? Math.floor(value) : value;
}
