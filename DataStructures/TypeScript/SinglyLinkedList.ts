class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number) {
    this.data = data;
  }
}

class SinglyLinkedList {
  length: number;
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Insert a new element at the beginning of the list
  insertAtHead(data: number) {
    const newNode = new ListNode(data);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert a new element at the end of the list
  insertAtTail(data: number) {
    const newNode = new ListNode(data);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Insert a new element at the given position (0-indexed)
  insertAtPosition(position: number, data: number) {
    // Validate the position
    if (position < 0) {
      throw new Error("Cannot insert elements at negative positions");
    }

    if (position > this.length) {
      throw new Error(
        "Cannot insert elements at positions greater than the length of the list"
      );
    }

    const newNode = new ListNode(data);

    if (position === 0) {
      this.insertAtHead(data);
    } else if (position === this.length) {
      this.insertAtTail(data);
    } else {
      // If the position is in the middle of the list, find the previous node
      let previousNode: ListNode = this.head!;

      for (let i = 0; i < position - 1; i++) {
        previousNode = previousNode!.next!;
      }

      // Set the next node of the new node as the next node of the previous node
      // From
      // - - - - - - - -     - - -
      // | previousNode | -> | B |
      // - - - - - - - -     - - -
      // To
      // - - - -    - - -
      // | New | -> | B |
      // - - - -   - - -
      newNode.next = previousNode.next;

      // Set the next node of the previous node as the new node
      // From
      // - - - - - - - -     - - -
      // | previousNode | -> | B |
      // - - - - - - - -     - - -
      // To
      // - - - - - - - -     - - - - - -
      // | previousNode | -> | newNode |
      // - - - - - - - -     - - - - - -
      previousNode.next = newNode;
      this.length++;
    }
  }

  // Insert a new element at the end of the list
  insert(data: number) {
    this.insertAtPosition(this.length, data);
  }

  // Returns the index of the first occurrence of the given element or -1 if not found
  search(element: number) {
    // If the list is empty, return -1
    if (this.head == null) return -1;

    let currentNode: ListNode = this.head;
    let index = 0;

    while (currentNode != null) {
      // If the data stored in the current node is equal to the given element, return the current index
      if (currentNode.data === element) {
        return index;
      }

      // Otherwise, continue iterating linearly through the list
      currentNode = currentNode.next!;
      index++;
    }

    return -1;
  }

  // Delete the first element of the list
  deleteAtHead() {
    if (this.head == null) {
      throw new Error("Cannot delete from an empty list");
    }

    this.head = this.head.next;
    this.length--;
  }

  // Delete the last element of the list
  deleteAtTail() {
    if (this.head == null) {
      throw new Error("Cannot delete from an empty list");
    }

    // Get the previous node
    let previousNode: ListNode = this.head;

    while (previousNode.next!.next != null) {
      previousNode = previousNode.next!;
    }

    // Set the next node of the previous node as null and update the tail
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
  }

  // Delete the element at the given position (0-indexed)
  deleteAtPosition(position: number) {
    // Validate the position
    if (position < 0) {
      throw new Error("Cannot delete elements at negative positions");
    }

    if (position >= this.length) {
      throw new Error(
        "Cannot delete elements at positions greater than or equal to the length of the list"
      );
    }

    if (position === 0) {
      // If the position is 0, delete the head
      this.deleteAtHead();
    } else if (position === this.length - 1) {
      // If the position is the length of the list - 1, delete the tail
      this.deleteAtTail();
    } else {
      // If the position is in the middle of the list, find the previous node
      let previousNode: ListNode = this.head!;

      for (let i = 0; i < position - 1; i++) {
        previousNode = previousNode!.next!;
      }

      // Set the next node of the previous node as the next node of the next node of the previous node
      // From
      // - - - - - -     - - - - -     - - - -
      // | Previous | -> | Delete | -> | Next |
      // - - - - - -     - - - - -     - - - -
      // To
      // - - - - - -     - - - -
      // | Previous | -> | Next |
      // - - - - - -     - - - -
      previousNode.next = previousNode.next!.next;
      this.length--;
    }
  }

  // Delete the first occurrence of the given element
  deleteElement(element: number) {
    if (this.head != null && this.head.data == element) {
      // If the element is the head, delete the head
      this.deleteAtHead();
    } else if (this.tail != null && this.tail.data == element) {
      // If the element is the tail, delete the tail
      this.deleteAtTail();
    } else {
      const position = this.search(element);
      if (position === -1) throw new Error("Element not found");
      else this.deleteAtPosition(position);
    }
  }

  // Print the list
  display() {
    if (this.head == null) {
      throw new Error("Cannot display an empty list");
    }

    let currentNode: ListNode = this.head;
    while (currentNode != null) {
      console.log(`Current data: ${currentNode.data}`);
      currentNode = currentNode.next!;
    }
  }
}
