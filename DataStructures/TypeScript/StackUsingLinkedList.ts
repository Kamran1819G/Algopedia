export class StackNode {
  data: number;
  next: StackNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

export class Stack {
  private top: StackNode | null;
  private capacity: number;
  private size: number;

  constructor(capacity: number) {
    this.top = null;
    this.capacity = capacity;
    this.size = 0;
  }

  // Returns the size of the Stack
  getSize(): number {
    return this.size;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  // Insert an element into the stack
  push(element: number) {
    if (this.getSize() === this.capacity)
      throw new Error("Cannot push into a full stack");

    const newNode = new StackNode(element);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove an element from the stack
  pop(): number {
    if (this.isEmpty()) throw new Error("Cannot pop from an empty stack");

    const element = this.top!.data;
    this.top = this.top!.next;
    this.size--;

    return element;
  }

  // Get the top element of the stack
  peek(): number {
    if (this.isEmpty()) throw new Error("Cannot peek into an empty stack");
    return this.top!.data;
  }

  // Print the elements of the stack
  display() {
    if (this.isEmpty()) throw new Error("Cannot display an empty stack");

    let currentNode = this.top;
    while (currentNode !== null) {
      console.log(`Current data: ${currentNode.data}`);
      currentNode = currentNode.next;
    }
  }
}
