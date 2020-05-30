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
function* InsertionSort(input: number[]) {
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
function* mergeSort() {}

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
function* radixSort() {}
