import { numAtDigit, findLargestDigitPlace } from "../utilities";

/**
 *
 * Tests for numAtDigit function
 *
 */
describe("Return Number at specified digit place - 0 Based - numAtDigit function", () => {
  // Desired Behavior
  it("Should Return 3 from 7583", () => {
    const result = numAtDigit(7583, 0);
    expect(result).toBe(3);
  });

  it("Should Return 8 from 7583", () => {
    const result = numAtDigit(7583, 1);
    expect(result).toBe(8);
  });

  it("Should Return 5 from 7583", () => {
    const result = numAtDigit(7583, 2);
    expect(result).toBe(5);
  });

  it("Should Return 7 from 7583", () => {
    const result = numAtDigit(7583, 3);
    expect(result).toBe(7);
  });

  // edge case - Digit place not in number
  it("Should Return undefined", () => {
    const result = numAtDigit(7583, 4);
    expect(result).toBeUndefined;
  });

  // edge case - negative digit value
  it("Should Return undefined", () => {
    const result = numAtDigit(17583, -1);
    expect(result).toBeUndefined;
  });
});

/**
 *
 * Tests For findLargestDigitPlace function
 *
 */
describe("findLargestDigitPlace function", () => {
  it("Should Return 1", () => {
    const result = findLargestDigitPlace([]);
    expect(result).toBe(1);
  });

  it("Should Return 1", () => {
    const result = findLargestDigitPlace([5]);
    expect(result).toBe(1);
  });

  it("Should Return 2", () => {
    const result = findLargestDigitPlace([10, 5]);
    expect(result).toBe(2);
  });

  it("Should Return 2", () => {
    const result = findLargestDigitPlace([10, 99]);
    expect(result).toBe(2);
  });

  it("Should Return 4", () => {
    const result = findLargestDigitPlace([10, 1001, 99]);
    expect(result).toBe(4);
  });
});
