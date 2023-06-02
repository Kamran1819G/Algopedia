# Shell Sort

 Shell sort is a sorting algorithm that improves upon the insertion sort algorithm by sorting elements that are a certain distance apart, rather than sorting adjacent elements as in insertion sort. This allows the algorithm to partially sort the elements and make it easier to perform the final sort.

The distance between the elements, known as the gap, is initially set to a value that is a fraction of the length of the array. The gap is then decreased by a certain amount at each iteration of the sort. The elements are then compared and swapped according to their relative order, until the gap is reduced to 1, at which point the algorithm functions like an insertion sort.

![image](https://user-images.githubusercontent.com/72748315/208669896-90d04a2d-9fda-42af-a5bf-256133171fbf.png)
![image](https://user-images.githubusercontent.com/72748315/208669924-200df388-6ea5-44d8-b6b2-b9e1ef4f5f2e.png)

 After performing above step, we will simply apply insertion sort on this array.

![image](https://user-images.githubusercontent.com/72748315/208669963-ae69e8a6-99e0-4494-a1b8-03279cf20985.png)

 Shell sort has a time complexity of O(n^2), making it less efficient than other sorting algorithms, such as quick sort, which has a time complexity of O(n log n). However, it is a stable sort, meaning that the order of equal elements is preserved.

## Time Complexity

| Best Case    | Average Case | Worst Case |
| ------------ | ------------ | ---------- |
| O(n log n)   | O(n log n)   | O(n^2)     |
