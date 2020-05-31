/**
 *
 * Utilities functions \
 * - Mutate Input
 *
 */

/**
 *
 * Returns The Number at The Specified Digit \
 * Used In :
 * - Radix Sort
 *
 */
export function numAtDigit(num: number, digit: number) {
  const numString = String(num);

  let largestDigit = numString.length - 1;

  const numFound = numString[largestDigit - digit];

  if (typeof numFound === "undefined") {
    return undefined;
  } else {
    return parseInt(numFound);
  }
}

/**
 *
 * Finds The Largest Digit Place in an Array \
 * Used In :
 * - Radix Sort
 *
 */
export function findLargestDigitPlace(arr: number[]) {
  let largest = "0";

  arr.forEach((num) => {
    const numToString = String(num);

    if (numToString.length > largest.length) {
      largest = numToString;
    }
  });

  return largest.length;
}
