/**
 * Generate an array with random length
 * and random set of numbers
 *
 */
export function randomSet(): number[] {
  return Array(Math.floor(Math.random() * 35))
    .fill(null)
    .map(() => {
      return Math.floor(Math.random() * 100);
    });
}
