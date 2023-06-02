# Quick Sort

 Quick sort is a divide and conquer sorting algorithm that works by selecting a pivot element from a list and partitioning the list into two sublists based on whether the elements are less than or greater than the pivot. It then recursively sorts the sublists and combines them back together to produce the final sorted list.

## Pivot can be

- pick the first element as a pivot.
- pick the last element as a pivot.
- Pick a random element as a pivot.
- Pick median as the pivot.

![image](https://user-images.githubusercontent.com/72748315/208669618-38710208-b6bf-4ce2-930e-9a7f2d57287a.png)

 The algorithm has a time complexity of O(n * log(n)) in the average case and O(n^2) in the worst case, which makes it more efficient than other sorting algorithms with a quadratic time complexity, such as bubble sort and selection sort. Quick sort is also an in-place sorting algorithm, which means it does not require additional memory to sort the list.

## Time Complexity

| Best Case    | Average Case | Worst Case |
| ------------ | ------------ | ---------- |
| O(n log n)   | O(n log n)   | O(n^2)     |
