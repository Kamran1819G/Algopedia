function insertionSort(arr: number[]): number[] {
    const length: number = arr.length;
    for (let i: number = 1; i < length; i++) {
        let currentElement: number = arr[i];
        let j: number = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
    return arr;
}

const unsortedArray: number[] = [12, 11, 13, 5, 6];
const sortedArray: number[] = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [5, 6, 11, 12, 13]
