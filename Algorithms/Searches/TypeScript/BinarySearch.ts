export class BinarySearch {
  /**
   * Searches for a value in an array in O(log n) time.
   * @param array The array to search.
   * @param value The value to search for.
   * @returns The index of the value if found, otherwise -1.
   * @example BinarySearch.search([1, 2, 3], 2); // 1
   * @example BinarySearch.search([1, 2, 3], 4); // -1
   **/
  static search<T>(array: T[], value: T): number {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while (lowerBound <= upperBound) {
      const middle = Math.floor((lowerBound + upperBound) / 2);

      if (array[middle] === value) return middle;
      else if (array[middle] < value) lowerBound = middle + 1;
      else upperBound = middle - 1;
    }

    return -1;
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(BinarySearch.search(arr, 3)); // 2
console.log(BinarySearch.search(arr, 0)); // -1

const arr2 = ["a", "b", "c", "d", "e"];
console.log(BinarySearch.search(arr2, "c")); // 3
console.log(BinarySearch.search(arr2, "f")); // -1
