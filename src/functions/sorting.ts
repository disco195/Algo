import { ValueBar } from "../types/sort/common";

/**
 *
 * Bubble Sort Generator function
 *
 */
function* bubbleSort(inputSet: ValueBar[]) {
  const set = [...inputSet];
  let noSwaps = false;

  for (let i = set.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (set[j]["value"] > set[j + 1]["value"]) {
        // set status to active
        set[j]["active"] = true;
        set[j + 1]["active"] = true;

        yield set;

        [set[j], set[j + 1]] = [set[j + 1], set[j]];
        yield set;

        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return set;
}
