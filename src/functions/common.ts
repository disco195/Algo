// Dependencies
import { v4 } from "uuid";
// Functions
import { ValueBar } from "../types/sort/common";

/**
 *
 * Returns Array of Numbers from a
 * Comma separated string input
 *
 */
export function extractSet(values: string) {
  const arr = values
    .replace(/[^0-9,]/g, "") // remove unwanted chars
    .split(",") // split at comma
    .filter((value) => {
      // filter parsable strings
      let num = parseInt(value);
      return typeof num === "number" && !isNaN(num);
    })
    .map((value) => parseInt(value));

  return arr;
}

/**
 *
 * Generate ValueBar Object
 * from a set of Numbers
 *
 */
export function makeSet(arr: number[]): ValueBar[] {
  // find maximum value in the set
  const max = Math.max(...arr);

  // map set and add height, width and key
  return arr.map((value) => {
    return {
      height: Math.floor((value / max) * 98) + 1,
      value,
      active: false,
      key: v4(),
    };
  });
}
