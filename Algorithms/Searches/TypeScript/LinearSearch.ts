export class LinearSearch {
  /**
   * Searches for a value in an array in O(n) time.
   * @param array The array to search.
   * @param value The value to search for.
   * @returns The index of the value if found, otherwise -1.
   * @example LinearSearch.search([1, 2, 3], 2); // 1
   * @example LinearSearch.search([1, 2, 3], 4); // -1
   **/
  static search<T>(array: T[], value: T): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }

    return -1;
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(LinearSearch.search(arr, 3)); // 2
console.log(LinearSearch.search(arr, 0)); // -1

const arr2 = ["a", "b", "c", "d", "e"];
console.log(LinearSearch.search(arr2, "e")); // 4
console.log(LinearSearch.search(arr2, "f")); // -1
