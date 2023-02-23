# Insertion Sort:

#### Insertion sort is a simple sorting algorithm that works by iterating through a list of items and inserting each item into its proper place in a sorted sublist.

#### After Comparing element to the left shift elements to the right to make room to insert a value.

#### Here is an example of how the insertion sort algorithm works, using the following list of numbers as an example: </br> `[8, 5, 3, 1, 9, 6, 0, 7, 4, 2]`

1. The algorithm starts by setting the first element (8) as the sorted portion of the list and the rest of the elements as the unsorted portion. The sorted portion is shown in bold, and the unsorted portion is shown in parentheses:
</br> `[8, (5, 3, 1, 9, 6, 0, 7, 4, 2)]`

2. It then selects the first element of the unsorted portion (5) and compares it to the elements in the sorted portion. Since 5 is greater than the first element (8) in the sorted portion, it shifts 8 to the right and inserts 5 in its place:
</br> `[5, 8, (3, 1, 9, 6, 0, 7, 4, 2)]`

3. It then selects the next element of the unsorted portion (3) and compares it to the elements in the sorted portion. Since 3 is less than the first element (5) in the sorted portion, it shifts 5 to the right and inserts 3 in its place:
</br> `[3, 5, 8, (1, 9, 6, 0, 7, 4, 2)]`

4. The algorithm continues this process until all elements have been inserted into the sorted portion of the list. After all elements have been inserted, the final sorted list is:
</br> `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`

#### I hope this example helps to clarify how the insertion sort algorithm works.  Let me know if you have any questions!

#### The algorithm has a time complexity of O(n^2) in the worst case, which means it takes quadratic time to sort a list of items. However, in the best case (when the list is already sorted), the time complexity is O(n), which makes it more efficient than other sorting algorithms with a quadratic time complexity, such as bubble sort and selection sort. Insertion sort is simple to implement and is often used as a teaching tool to introduce the concept of sorting. It is also a good choice for sorting small lists or lists that are already partially sorted.

### Time Complexity

<table>
    <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
    </tr>
    <tr>
        <td>O(n)</td>
        <td>O(n^2)</td>
        <td>O(n^2)</td>
    </tr>
</table>
