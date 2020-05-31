/**
 *
 * Bubble Sort Generator function
 *
 */
export function* bubbleSort(input: number[]) {
  const arr = [...input];
  let n = arr.length - 1;
  let swap: boolean;
  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
    n--;
  } while (swap);
  return arr;
}

/**
 *
 * Selection Sort Generator function
 *
 */
export function* selectionSort(input: number[]) {
  const arr = [...input];

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
  }
  return arr;
}

/**
 *
 * Insertion Sort Generator function
 *
 */
export function* InsertionSort(input: number[]) {
  const arr = [...input];

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

/**
 *
 * Merge Sort Generator function
 *
 */
export function mergeSort(input: number[]): number[] {
  const arr = [...input];

  // Edge case
  if (arr.length <= 1) return arr;

  // Splitting Arr Part
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merging Part
  const merge = (arr1: number[], arr2: number[]) => {
    let sorted: number[] = [];

    // Loop while lengths are not equal 0
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        sorted.push(arr1.shift() as number);
      } else {
        sorted.push(arr2.shift() as number);
      }
    }
    return sorted.concat(...arr1, ...arr2);
  };
  return merge(left, right);
}

/**
 *
 * Quick Sort Generator function
 *
 */
function* quickSort() {}

/**
 *
 * Quick Random Sort Generaot function
 *
 */
function* quickRandomSort() {}

/**
 *
 * Counting Sort Generator function
 *
 */
function* countingSort() {}

/**
 *
 * Radix Sort Generator function
 *
 */
export function* radixSort(input: number[]) {
  let arr = [...input];

  const largestDigitPlace = findLargestDigitPlace(arr);

  for (let i = 0; i < largestDigitPlace; i++) {
    let buckets: string[][] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = numAtDigit(arr[j], i);

      if (typeof num !== "undefined") {
        buckets[num].push(String(arr[j]));
      }
    }
    arr = buckets.flat().map((num) => parseInt(num));
  }
  console.log("---------------------------------------------------");
  console.log(arr);
  return arr;
}

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
function numAtDigit(num: number, digit: number) {
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
function findLargestDigitPlace(arr: number[]) {
  let largest = "0";

  arr.forEach((num) => {
    const numToString = String(num);

    if (numToString.length > largest.length) {
      largest = numToString;
    }
  });

  return largest.length;
}
