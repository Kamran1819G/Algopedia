# Stack

 A stack is a basic linear data structure that follows an order in which objects are accessed. The order is called `LIFO(Last In First Out)` or `FILO(First in Last Out)`. A perfect example of stacks would be plates in a canteen, a pile of books, or a box of Pringles, etc. Stacks are used to implement parsers and evaluation expressions and backtracking algorithms. basic operations are pushing an element into the stack and popping the element out of the stack. We can make use of linked lists or arrays of lists. The stack contains only one pointer "top pointer" which points to the topmost elements of the stack. Insertion and deletion only occurs at one end of the stack.

![image](https://user-images.githubusercontent.com/72748315/208665818-2c8ed75b-812c-4052-8d48-7d811fc0db0d.png)

## Standard Stack Operations

1. `push()`: inserts the element at the top of the stack.
2. `pop()`: When we delete the element at the top of the stack
3. `isEmpty()`: It determines whether the stack is empty.
4. `isFull()`: determines whether the stack is full or not
5. `peek()`: Gets the value of the top element without removing it

## Working with Stacks

 A pointer called TOP is used to keep track of the top element in the stack. When initializing the stack, we set its value to -1 so that we can check if the stack is empty by comparing TOP == -1. On pushing an element, we increase the value of TOP and place the new element in the position pointed to by TOP. On popping an element, we return the element pointed to by TOP and reduce its value. Before pushing, we check if the stack is already full before popping, we check if the stack is already empty.

## Application of Stacks

- Undo/Redo features in text editors
- Moving back/forward through browser history
- Backtracking algorithms (maze, file directories)
- Calling functions (call stack)
