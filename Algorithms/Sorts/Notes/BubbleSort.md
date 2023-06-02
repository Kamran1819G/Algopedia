# Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly iterates through a list of items and compares adjacent pairs of items, swapping them if they are in the wrong order. The algorithm gets its name from the way smaller or larger elements "bubble" to the top of the list.

 This algorithm is like settling heavy element at bottom.

  Here is an example of how the bubble sort algorithm works, using the following list of numbers as an example:  
   `[8, 5, 3, 1, 9, 6, 0, 7, 4, 2]`

1. The algorithm starts by comparing the first two elements (8 and 5) and swapping them if they are in the wrong order. In this case, 5 is less than 8, so they are swapped:  
 `[5, 8, 3, 1, 9, 6, 0, 7, 4, 2]`

2. It then compares the second and third elements (8 and 3) and swaps them if they are in the wrong order. In this case, 3 is less than 8, so they are swapped:  
 `[5, 3, 8, 1, 9, 6, 0, 7, 4, 2]`

3. It continues this process until it reaches the end of the list, at which point the largest element will have "bubbled" to the end of the list. After the first pass, the list looks like this:  
`[5, 3, 1, 8, 9, 6, 0, 7, 4, 2]`

4. The algorithm repeats this process for the remaining passes until the list is fully sorted. After all passes are complete, the final sorted list is:  
 `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

 I hope this example helps to clarify how the bubble sort algorithm works. Let me know if you have any questions!

The algorithm has a time complexity of O(n^2), which means it takes quadratic time to sort a list of items. This makes it less efficient than other sorting algorithms, such as quicksort or merge sort, which have a time complexity of O(n * log(n)). However, bubble sort is simple to implement and is often used as a teaching tool to introduce the concept of sorting.

| Time Complexity: | O(n^2) |
| --- | --- |

## When to use?

- Small data set = okay
- Large data set = Bad (plz don’t)
