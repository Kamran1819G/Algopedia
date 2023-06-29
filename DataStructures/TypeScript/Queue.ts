export class Queue {
  private elements: number[];
  private capacity: number;
  private rearIndex: number;

  constructor(size: number) {
    this.capacity = size;
    this.rearIndex = -1;
    this.elements = new Array<number>(size);
  }

  // Get the size of the list
  getSize(): number {
    return Math.max(this.rearIndex + 1, 0);
  }

  // Check if the list is empty
  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  // Add an element to the end of the queue
  enqueue(element: number) {
    if (this.getSize() === this.capacity)
      throw new Error("Cannot enqueue into a full queue");

    this.elements[++this.rearIndex] = element;
  }

  // Remove an element from the front of the queue
  dequeue(): number {
    if (this.isEmpty()) throw new Error("Cannot dequeue from an empty queue");
    const element = this.elements[0];

    // Move all elements to the left by one position
    for (let i = 0; i < this.rearIndex; i++) {
      this.elements[i] = this.elements[i + 1];
    }
    this.rearIndex--;

    return element;
  }

  // Get the element at the front of the queue
  peek(): number {
    if (this.isEmpty()) throw new Error("Cannot peek into an empty queue");
    return this.elements[0];
  }

  // Print the elements of the queue
  display() {
    if (this.isEmpty()) throw new Error("Cannot display an empty queue");

    for (let i = 0; i <= this.rearIndex; i++) {
      console.log(this.elements[i]);
    }
  }
}
