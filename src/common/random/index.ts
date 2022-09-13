export default function random(lower: number, upper: number, floor = false): number {
  const value = lower + (upper - lower + (floor ? 1 : 0)) * Math.random();

  return floor ? Math.floor(value) : value;
}
