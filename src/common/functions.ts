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
      height: Math.floor((value / max) * 95),
      width: Math.floor((1 / (arr.length + 2)) * 100),
      value,
      active: false,
      key: v4(),
    };
  });
}

export function extractDefinedValues(values: string): number[] {
  const arr = values
    .replace(/[^0-9,]/g, "")
    .split(",")
    .map((value) => {
      if (value && parseInt(value) < 100) return parseInt(value);
    })
    .filter((value) => {
      return typeof value === "number";
    });
  if (arr.length) return arr as number[];
  return randomSet();
}
