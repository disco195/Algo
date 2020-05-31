import {
  bubbleSort,
  selectionSort,
  InsertionSort,
  mergeSort,
} from "../sorting";

const Case1 = {
  input: [2],
  message: "Should Return [2]",
  output: [2],
};

const Case2 = {
  input: [2, 5],
  message: "Should Return [2, 5]",
  output: [2, 5],
};

const Case3 = {
  input: [4, 1, 3, 9, 7],
  message: "Should Return [1, 3, 4, 7, 9]",
  output: [1, 3, 4, 7, 9],
};

const Case4 = {
  input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  message: "Should Return [1, 2, 3, 4, 5, 6, 7, 8, 9]",
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

/**
 *
 * Bubble Sort Tests
 *
 */
describe("Bubble Sort Generator Function", () => {
  it(Case1.message, () => {
    const bubble = bubbleSort(Case1.input);
    expect(bubble.next().value).toEqual(Case1.output);
  });

  it(Case2.message, () => {
    const bubble = bubbleSort(Case2.input);
    expect(bubble.next().value).toEqual(Case2.output);
  });

  it(Case3.message, () => {
    const bubble = bubbleSort(Case3.input);
    expect(bubble.next().value).toEqual(Case3.output);
  });

  it(Case4.message, () => {
    const bubble = bubbleSort(Case4.input);
    expect(bubble.next().value).toEqual(Case4.output);
  });
});

/**
 *
 * Selection Sort Generator Function
 *
 */
describe("Selection Sort Generator Function", () => {
  it(Case1.message, () => {
    const selection = selectionSort(Case1.input);
    expect(selection.next().value).toEqual(Case1.output);
  });

  it(Case2.message, () => {
    const selection = selectionSort(Case2.input);
    expect(selection.next().value).toEqual(Case2.output);
  });

  it(Case3.message, () => {
    const selection = selectionSort(Case3.input);
    expect(selection.next().value).toEqual(Case3.output);
  });

  it(Case4.message, () => {
    const selection = selectionSort(Case4.input);
    expect(selection.next().value).toEqual(Case4.output);
  });
});

/**
 *
 * Insertion Sort Generator Function
 *
 */
describe("Insertion Sort Generator Function", () => {
  it(Case1.message, () => {
    const insertion = InsertionSort(Case1.input);
    expect(insertion.next().value).toEqual(Case1.output);
  });

  it(Case2.message, () => {
    const insertion = InsertionSort(Case2.input);
    expect(insertion.next().value).toEqual(Case2.output);
  });

  it(Case3.message, () => {
    const insertion = InsertionSort(Case3.input);
    expect(insertion.next().value).toEqual(Case3.output);
  });

  it(Case4.message, () => {
    const insertion = InsertionSort(Case4.input);
    expect(insertion.next().value).toEqual(Case4.output);
  });
});

/**
 *
 * Merge Sort Tests
 *
 */
describe("Merge Sort Function", () => {
  it(Case1.message, () => {
    const merge = mergeSort(Case1.input);
    expect(merge).toEqual(Case1.output);
  });

  it(Case2.message, () => {
    const merge = mergeSort(Case2.input);
    expect(merge).toEqual(Case2.output);
  });

  it(Case3.message, () => {
    const merge = mergeSort(Case3.input);
    expect(merge).toEqual(Case3.output);
  });

  it(Case4.message, () => {
    const merge = mergeSort(Case4.input);
    expect(merge).toEqual(Case4.output);
  });
});
