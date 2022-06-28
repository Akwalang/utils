type Callback<T> = (stack: T[]) => void;

declare function throttle<T extends []>(
  callback: Callback<T>,
  delay: number,
  delayMin?: number,
  delayMax?: number
): (...args: T[]) => void;

export default throttle;
