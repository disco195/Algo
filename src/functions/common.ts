// Dependencies
import { v4 } from "uuid";
// Functions
import { randomSet } from "./";
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
    .map((value) => {
      // validate value as a number
      if (value && parseInt(value) < 100) return parseInt(value);
    })
    .filter((value) => {
      // extra evaluation
      return typeof value === "number" && !isNaN(value);
    });
  if (arr.length < 2) return arr as number[];
  return randomSet();
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
      height: Math.floor((value / max) * 95),
      width: Math.floor((1 / (arr.length + 2)) * 100),
      value,
      active: false,
      key: v4(),
    };
  });
}
