# Doubly Linked List

#### A `Doubly Linked List (DLL)` contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.

Advantages over singly linked list

- A DLL can be traversed in both forward and backward direction.
- The delete operation in DLL is more efficient if pointer to the node to be deleted is given.
- We can quickly insert a new node before a given node.

#### In singly linked list, to delete a node, pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using previous pointer.

Disadvantages over singly linked list

- Every node of DLL Require extra space for an previous pointer. It is possible to implement DLL with single pointer though (See this and this).
- All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with next pointers. For example in following functions for insertions at different positions, we need 1 or 2 extra steps to set previous pointer.

## Time Complexity

<table>
    <tr>
        <th>Operation</th>	
        <th>Average</th>
        <th>Worst</th>
    </tr>
    <tr>
        <td>Access</td>
        <td>Θ(n)</td>
        <td>O(n)</td>
    </tr>
    <tr>
        <td>Search</td>
        <td>Θ(n)</td>
        <td>O(n)</td>
    </tr>
    <tr>
        <td>Insertion</td>
        <td>Θ(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Deletion</td>
        <td>Θ(1)</td>
        <td>O(1)</td>
    </tr>
</table>
