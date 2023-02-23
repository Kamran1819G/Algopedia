# Singly Linked List

#### Singly Linked List is a linear and connected data structure made of Nodes. Each node is composed of a variable data where its content is stored and a pointer to the next Node on the list. The Linked List has a pointer to the first element of this Node sequence and may also have another pointer to the last Node to make operations at the far end less time-consuming. You can also store a length variable to store the total length.

### Advantages over Arrays

- Size of a linked list is not fixed (dynamic size)
- Deleting and adding an element is not expensive compared to an array

### Drawbacks

- Elements can be accessed sequentially not randomly compared to an array
- Extra memory allocation needs to be done for pointers which connects elements in a linked list

## Time Complexity

<table>
    <tr>
        <th>Operation</th>
        <th>Average</th>
        <th>Worst</th>
    </tr>
    <tr>
        <td>Access</td>
        <td>O(n)</td> 
        <td>O(n)</td>
    </tr>
    <tr>
        <td>Search</td>
        <td>O(n)</td>
        <td>O(n)</td>
    </tr>
    <tr>
        <td>Insertion</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Deletion</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
</table>