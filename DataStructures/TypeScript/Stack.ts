export class Stack {
  private elements: number[];
  private capacity: number;
  private rearIndex: number;

  constructor(capacity: number) {
    this.elements = new Array<number>(capacity);
    this.capacity = capacity;
    this.rearIndex = -1;
  }

  // Returns the size of the Stack
  getSize(): number {
    return this.rearIndex + 1;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  // Insert an element into the stack
  push(element: number) {
    if (this.getSize() === this.capacity)
      throw new Error("Cannot push into a full stack");

    // Move all elements one position ahead
    for (let i = this.rearIndex; i >= 0; i--) {
      this.elements[i + 1] = this.elements[i];
    }
    this.rearIndex++;

    // Insert the new element at the beginning
    this.elements[0] = element;
  }

  // Remove an element from the stack
  pop(): number {
    if (this.isEmpty()) throw new Error("Cannot pop from an empty stack");

    // Get the first element
    const element = this.elements[0];

    // Move all elements one position behind
    for (let i = 0; i < this.rearIndex; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    this.rearIndex--;

    return element;
  }

  // Get the top element of the stack
  peek(): number {
    if (this.isEmpty()) throw new Error("Cannot peek into an empty stack");
    return this.elements[0];
  }

  // Print the elements of the stack
  display() {
    if (this.isEmpty()) throw new Error("Cannot display an empty stack");

    for (let i = 0; i <= this.rearIndex; i++) {
      console.log(`Current data: ${this.elements[i]}`);
    }
  }
}
