export class QueueNode {
  data: number;
  next: QueueNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

export class Queue {
  private front: QueueNode | null;
  private rear: QueueNode | null;
  private capacity: number;
  private size: number;

  constructor(capacity: number) {
    this.front = null;
    this.rear = null;
    this.capacity = capacity;
    this.size = 0;
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }

  // Check if the list is empty
  isEmpty(): boolean {
    return this.getSize() === 0;
  }

  // Add an element to the end of the queue
  enqueue(element: number) {
    if (this.getSize() === this.capacity)
      throw new Error("Cannot enqueue into a full queue");

    const newNode = new QueueNode(element);

    if (this.isEmpty()) {
      // If the queue is empty, both front and rear point to the new node
      this.front = newNode;
      this.rear = newNode;
    } else {
      // Else, the new node is added after the rear and rear pointer is updated
      this.rear!.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  // Remove an element from the front of the queue
  dequeue(): number {
    if (this.isEmpty()) throw new Error("Cannot dequeue from an empty queue");

    const element = this.front!.data;

    if (this.front === this.rear) {
      // If the queue has only one node, both front and rear point to null
      this.front = null;
      this.rear = null;
    } else {
      // Else, the front is updated to the next node
      this.front = this.front!.next;
    }

    this.size--;
    return element;
  }

  // Get the element at the front of the queue
  peek(): number {
    if (this.isEmpty()) throw new Error("Cannot peek into an empty queue");
    return this.front!.data;
  }

  // Print the elements of the queue
  display() {
    if (this.isEmpty()) throw new Error("Cannot display an empty queue");

    let temp = this.front;
    while (temp !== null) {
      console.log(`Current data: ${temp.data}`);
      temp = temp.next;
    }
  }
}
