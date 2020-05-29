export function bubble(input: SortState["set"]) {
  const arr = [...input];
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j]["value"] > arr[j + 1]["value"]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
