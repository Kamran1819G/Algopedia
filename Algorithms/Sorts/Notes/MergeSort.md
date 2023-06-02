# Merge Sort

 Merge sort is a divide and conquer sorting algorithm that works by recursively dividing a list of items into smaller sublists until each sublist consists of a single element, and then merging the sublists back together in a sorted order.

 Here is an example of how the merge sort algorithm works, using the following list of numbers as an example:  
  `[8, 5, 3, 1, 9, 6, 0, 7, 4, 2]`

1. The algorithm starts by dividing the list into two sublists: `[8, 5, 3, 1]` and `[9, 6, 0, 7, 4, 2]`. It then recursively divides each sublist into smaller sublists until each sublist consists of a single element:  
`[8]`, `[5]`, `[3]`, `[1]`  
`[9]`, `[6]`, `[0]`, `[7]`, `[4]`, `[2]`

2. It then merges the sublists back together in a sorted order:  
`[5, 8]`, `[1, 3]`  
`[0, 6, 7]`, `[2, 4, 9]`  
`[1, 3, 5, 8]`, `[0, 2, 4, 6, 7, 9]`

3. Finally, it merges the two sublists together to produce the final sorted list: </br>
`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

 I hope this example helps to clarify how the merge sort algorithm works. Let me know if you have any questions!

 The algorithm has a time complexity of O(n * log(n)), which makes it more efficient than other sorting algorithms with a quadratic time complexity, such as bubble sort and selection sort. Merge sort is also a stable sort, which means it preserves the relative order of items with equal values. It is a good choice for sorting large lists or lists with many duplicate elements.

## Time Complexity

| Time Complexity: | O(n log n) |
| --- | --- |
