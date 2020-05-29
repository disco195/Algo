import { v4 } from "uuid";
/**
 * Generate an array with random length
 * and random set of numbers
 *
 */
export function randomSet() {
  // generate random length
  const length = Math.floor(Math.random() * 35 + 3);

  // generate random values
  return Array(length)
    .fill(null)
    .map(() => Math.floor(Math.random() * 100));
}

export function makeSet(arr: number[]) {
  // find maximum value in the set
  const max = Math.max(...arr);

  // map set and add height, width and key
  return arr.map((value) => {
    return {
      height: (value / max) * 95,
      width: (1 / (arr.length + 2)) * 100,
      value,
      key: v4(),
    };
  });
}
