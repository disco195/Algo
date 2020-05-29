/**
 *
 * Generate an array with random length
 * and random set of numbers
 *
 */
export function randomSet() {
  // generate random length
  const length = randomValue(35) + 3;

  // generate random values
  return Array(length)
    .fill(null)
    .map(() => randomValue(100));
}

/**
 *
 * Generates a random number
 * between ]0, 100[
 *
 */
export function randomValue(max = 10) {
  return Math.floor(Math.random() * max);
}
