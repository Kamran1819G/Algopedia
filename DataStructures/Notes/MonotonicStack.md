# What is a Monotonic Stack?

A monotonic stack is a stack whose elements are monotonically increasing or decreasing. It contains all qualities that a typical stack has and its elements are all monotonic decreasing or increasing.

Below are the features of a monotonic stack:

- It is a range of queries in an array situation
- The minima/maxima elements
- When an element is popped from the monotonic stack, it will never be utilised again.

The monotonic stack problem is mainly the previous/next smaller/larger problem. It maintains monotonicity while popping elements when a new item is pushed into the stack.

## Understanding Monotonic Stacks

Monotonic: It is a word for mathematics functions. A function y = f(x) is monotonically increasing or decreasing when it follows the below conditions: 

- As x increases, y also increases always, then it’s a monotonically increasing function. 
- As x increases, y decreases always, then it’s a monotonically decreasing function.

See the below examples:

- y = 2x +5, it’s a monotonically increasing function.
- y = -(2x), it’s a monotonically decreasing function.  

Similarly, A stack is called a monotonic stack if all the elements starting from the bottom of the stack is either in increasing or in decreasing order.

## Types of Monotonic Stack:

There are 2 types of monotonic stacks:

1. Monotonic Increasing Stack
2. Monotonic Decreasing Stack

### Monotonic Increasing Stack:

It is a stack in which the elements are in increasing order from the bottom to the top of the stack. 

Example: 1, 3, 10, 15, 17

#### How to achieve Monotonic Increasing Stack?

To create a Monotonic Increasing Stack, start with an empty stack, then, while iterating through elements in a sequence, keep removing elements from the stack as long as they are smaller than the current element, and push the current element onto the stack. This process ensures the stack maintains a strictly increasing order from bottom to top.

Steps to implement:

- As we need monotonically increasing stack, we should not have a smaller element at top of a bigger element.
- So Iterate the given list of elements one by one :
    - Before pushing into the stack, POP all the elements till either of one condition fails:
        - Stack is not empty
        - Stack’s top is bigger than the element to be inserted.
    - Then push the element into the stack.

### Illustration:

Consider an array Arr[] = {1, 4, 5, 3, 12, 10}
For i = 0: stk = {1}
For i = 1: stk = {1, 4}
For i = 2: stk = {1, 4, 5}
For i = 3: stk = {1, 3}  [pop 4 and 5 as 4 > 3 and 5 > 3]
For i = 4: stk = {1, 3, 12}
For i = 5: stk = {1, 3, 10} [pop 12 as 12 > 10]

# Output

The Array: `1` `4` `5` `3` `12` `10` 

The Stack: `1` `3` `10` 

**Time Complexity**: O(N)

**Auxiliary Space**: O(N)


# Monotonic Decreasing Stack

A stack is monotonically decreasing if its elements are in decreasing order from the bottom to the top of the stack. 

Example: 17, 14, 10, 5, 1

## How to achieve Monotonic Decreasing Stack?

To create a Monotonic Decreasing Stack, begin with an empty stack. While iterating through elements in a sequence, continuously remove elements from the stack as long as they are smaller than or equal to the current element. Finally, push the current element onto the stack. This process ensures the stack maintains a monotonic decreasing order from bottom to top.

### Steps to implement:

1. As we need a monotonically decreasing stack, we should not have a bigger element at the top of a smaller element.
2. So iterate the elements of the list one by one:
    - Before pushing into the stack, pop all the elements until either of one condition fails:
        - Stack is not empty
        - Stack’s top is smaller than the element to be inserted.
    - Then push the element into the stack.

### Illustration:

Consider an array: arr[] = {15, 17, 12, 13, 14, 10}

- For i = 0: stk = {15}
- For i = 1: stk = {17} (pop 15 as 15 < 17)
- For i = 2: stk = {17, 12}
- For i = 3: stk = {17, 13} (pop 12 as 12 < 13)
- For i = 4: stk = {17, 14} (pop 13 as 13 < 14)
- For i = 5: stk = {17, 14, 10}

**Output**

The Array: `15` `17` `12` `13` `14` `10` 

The Stack: `17` `14` `10` 

**Time Complexity**: O(N)

**Auxiliary Space**: O(N) 

Note that this implementation assumes that all elements in the input array are distinct. If there are duplicates, we need to modify the implementation to handle them correctly.

## Applications of Monotonic Stack :

Monotonic stack is generally used to deal with a typical problem like Next Greater Element. NGE (Find the first value on the right that is greater than the element). Also can be used for its varieties:

- Next Smaller Element
- Previous Greater Element
- Previous Smaller Element

Also, we use it to get the greatest or smallest array or string by given conditions (remaining size k/ no duplicate).

To understand the optimization power of monotonic stacks, let’s take this example problem: Minimum Cost Tree From Leaf Values. This problem can be solved in three different algorithm ways, out of which the monotonic stack is the most optimized approach:

- Dynamic Programming Algorithmic Approach: O(N^3) Time O(N^2) Space
- Greedy Algorithmic Approach: O(N^2) Time O(1) Space
- Monotonic Stack Algorithmic Approach: O(N) Time O(N) Space

## Advantages of Monotonic Stack:

We can use the extra space of a monotonic stack to reduce time complexity.

- We can get the nearest smaller or greater element depending on the monotonic stack type by just retrieving the stack’s top element which is just an O(1) operation.
- The monotonic stack helps us maintain maximum and minimum elements in range and keeps order of elements in range. Therefore we don’t need to compare elements one by one again to get minima and maxima in range. Meanwhile because it keeps element’s order we only need to update stack based on newest added element.

## Disadvantages of Monotonic Stack:

- It increases space complexity of algorithm by factor of O(N), i.e., by linear complexity.
- It is often more complex to handle as now with existing problem we also need to handle stack carefully. As once elements are popped from stack we cannot get them back.