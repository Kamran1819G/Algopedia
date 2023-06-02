# Linear Searching

`Linear Search is defined as a sequential search algorithm` a simple algorithm for finding the position of a target value within a list or array. It works by sequentially checking each element of the list or array until the target value is found, or it is clear that the target value is not present in the list or array.

To perform a linear search, the following steps are followed:

1. Set a counter to 0.
2. Compare the target value to the element at the current position.
3. If the target value is equal to the element, the search is successful and the function returns the index of the element.
4. If the target value is not equal to the element, increment the counter and go back to step 2.
5. If the counter becomes equal to the length of the list or array, the target value is not present in the list or array and the function returns -1.

Linear search has a time complexity of O(n), meaning that it takes longer to search through larger lists or arrays. However, it is a simple algorithm that can be used on both sorted and unsorted lists or arrays

| Time Complexity |
| --------------- |
| O(n)            |