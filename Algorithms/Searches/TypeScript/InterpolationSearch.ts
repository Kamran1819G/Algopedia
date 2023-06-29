export class InterpolationSearch {
  /**
   * Searches for a value in an array in O(log log n) time in the average case.
   * @param array The array to search.
   * @param value The value to search for.
   * @returns The index of the value if found, otherwise -1.
   * @example InterpolationSearch.search([1, 2, 3], 2); // 1
   * @example InterpolationSearch.search([1, 2, 3], 4); // -1
   **/
  static search<T>(array: number[], value: number): number {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    while (lowerBound <= upperBound) {
      // Get an index using the interpolation / distribution formula instead
      // of always using the middle index as in binary search.
      const target =
        lowerBound +
        ((value - array[lowerBound]) / (array[upperBound] - array[lowerBound])) *
        (upperBound - lowerBound);

      const index = Math.floor(target);

      // If the value is lower than the first element or greater than the last element
      // it is not in the array
      if (index < 0 || index >= array.length) break;

      // Found
      if (array[index] === value) return index;
      // Use the right subarray to continue the search
      else if (array[index] < value) lowerBound = index + 1;
      // Use the left subarray to continue the search
      else upperBound = index - 1;
    }

    return -1;
  }
}

const arr = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37];
console.log(InterpolationSearch.search(arr, 13)); // 3
console.log(InterpolationSearch.search(arr, 33)); // 8
console.log(InterpolationSearch.search(arr, 0)); // -1
console.log(InterpolationSearch.search(arr, 44)); // -1
