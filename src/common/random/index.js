export default function random(lower, upper, round = false) {
  const value = lower + (upper - lower + 1) * Math.random();

  return round ? Math.floor(value) : value;
}
