# Selection Sort

 Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted portion of the list and adding it to the sorted portion of the list.

 The algorithm maintains two subarrays in a given array.

- The subarray which already sorted.
- The remaining subarray was unsorted.

 In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

 Here is an example of how the selection sort algorithm works, using the following list of numbers as an example:  
 `[8, 5, 3, 1, 9, 6, 0, 7, 4, 2]`

1. The algorithm starts by finding the minimum element in the list and swapping it with the first element (8). In this case, the minimum element is 0, so it swaps 0 and 8:  
`[0, 5, 3, 1, 9, 6, 8, 7, 4, 2]`

2. It then finds the minimum element in the remaining unsorted portion of the list (5, 3, 1, 9, 6, 8, 7, 4, 2) and swaps it with the second element (5). In this case, the minimum element is 1, so it swaps 1 and 5:  
`[0, 1, 3, 5, 9, 6, 8, 7, 4, 2]`

3. It continues this process until all elements have been added to the sorted portion of the list. After all elements have been added, the final sorted list is:  
`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

 I hope this example helps to clarify how the selection sort algorithm works. Let me know if you have any questions!

 The algorithm has a time complexity of O(n^2), which means it takes quadratic time to sort a list of items. This makes it less efficient than other sorting algorithms, such as quicksort or merge sort, which have a time complexity of O(n * log(n)). However, selection sort is simple to implement and is often used as a teaching tool to introduce the concept of sorting.

| Time Complexity: | O(n^2) |
| --- | --- |

## When to use?

- Small data set = okay
- Large data set = Bad (plz don’t)
