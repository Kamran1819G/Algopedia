export class ListNode {
  previous: ListNode | null;
  next: ListNode | null;
  data: number;

  constructor(data: number) {
    this.previous = null;
    this.next = null;
    this.data = data;
  }
}

export class DoublyLinkedList {
  private length: number;
  private head: ListNode | null;
  private tail: ListNode | null;

  // Get the length of the list
  getLength(): number {
    return this.length;
  }

  // Insert a new element at the beginning of the list
  insertAtHead(data: number) {
    const newNode = new ListNode(data);

    if (this.head == null) {
      // If the list is empty, the new node is both the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, insert the new node at the beginning
      //       - - - -             - - - -
      // From: | Null |  <<prev--  | Head |
      //       - - - -             - - - -
      //       - - - - - -   --next>>  - - - -
      // To:   | New Node |            | Head |
      //       - - - - - -   <<prev--  - - - -
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert a new element at the end of the list
  insertAtTail(data: number) {
    const newNode = new ListNode(data);

    if (this.head == null) {
      // If the list is empty, the new node is both the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, insert the new node at the end
      //       - - - -             - - - -
      // From: | Tail |  --next>>  | Null |
      //       - - - -             - - - -
      //       - - - - - -   --next>>  - - - - - -
      // To:   | Tail |                | New Node |
      //       - - - - - -   <<prev--  - - - - - -
      newNode.previous = this.tail;
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

    if (position === 0) {
      this.insertAtHead(data);
    } else if (position === this.length) {
      this.insertAtTail(data);
    } else {
      const newNode = new ListNode(data);
      let currentNode = this.head;
      let currentPosition = 0;

      while (currentPosition < position) {
        currentNode = currentNode!.next;
        currentPosition++;
      }

      // Update the pointers of the new node
      //       - - -  --next>>    - - - - - - - -   --next>>   - - -
      // From: | A |              | currentNode |              | B |
      //       - - -  <<prev--    - - - - - - - -   <<prev--   - - -
      //       - - -              - - - - - -  --next>>    - - - - - - - -
      // To:   | A |              | newNode |              | currentNode |
      //       - - -  <<prev--    - - - - - -              - - - - - - - -
      newNode.next = currentNode;
      newNode.previous = currentNode!.previous;

      // Update the pointers of the nodes before and after the new node
      //       - - -  --next>>    - - - - - - - -   --next>>   - - -
      // From: | A |              | currentNode |              | B |
      //       - - -  <<prev--    - - - - - - - -   <<prev--   - - -
      //       - - -  --next>>    - - - - - -              - - - - - - - -
      // To:   | A |              | newNode |              | currentNode |
      //       - - -              - - - - - -   <<prev--   - - - - - - - -
      currentNode!.previous!.next = newNode;
      currentNode!.previous = newNode;

      this.length++;
    }
  }

  // Returns the index of the first occurrence of the given element
  searchForward(data: number) {
    // If the list is empty, return -1
    if (this.head === null) return -1;

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentNode !== null) {
      // If the current node contains the given data, return the current position
      if (currentNode.data === data) {
        return currentPosition;
      }

      // Otherwise, continue iterating linearly
      currentNode = currentNode.next!;
      currentPosition++;
    }

    // If the element wasn't found return -1
    return -1;
  }

  // Returns the index of the last occurrence of the given element
  searchBackward(data: number) {
    // If the list is empty, return -1
    if (this.tail === null) return -1;

    let currentNode = this.tail;
    let currentPosition = this.length - 1;

    while (currentNode !== null) {
      // If the current node contains the given data, return the current position
      if (currentNode.data === data) {
        return currentPosition;
      }

      // Otherwise, continue iterating linearly
      currentNode = currentNode.previous!;
      currentPosition--;
    }

    // If the element wasn't found return -1
    return -1;
  }

  // Delete the first element of the list
  deleteAtHead() {
    if (this.head === null) throw new Error("Cannot delete from an empty list");

    if (this.head === this.tail) {
      // If the list has only one element, set both head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      // If the list has more than one element, delete the first element
      this.head = this.head.next;
      this.head!.previous = null;
    }

    this.length--;
  }

  // Delete the last element of the list
  deleteAtTail() {
    if (this.tail === null) throw new Error("Cannot delete from an empty list");

    if (this.head === this.tail) {
      // If the list has only one element, set both head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      // If the list has more than one element, delete the last element
      this.tail = this.tail.previous;
      this.tail!.next = null;
    }

    this.length--;
  }

  // Delete the element at the given position (0-indexed)
  deleteAtPosition(position: number) {
    // Validate the position
    if (position < 0)
      throw new Error("Cannot delete elements at negative positions");
    else if (position >= this.length)
      throw new Error(
        "Cannot delete elements at positions greater than or equal to the length of the list"
      );

    if (position === 0) {
      // If the position is 0, delete the first element
      this.deleteAtHead();
    } else if (position === this.length - 1) {
      // If the position is the last one, delete the last element
      this.deleteAtTail();
    } else {
      // Find the node containing the element to delete
      let currentNode = this.head;

      for (let i = 0; i < position; i++) {
        currentNode = currentNode!.next;
      }

      // Update the pointers of the nodes before and after the node to delete
      //       - - -  --next>>    - - - - - - - -   --next>>   - - -
      // From: | A |              | currentNode |              | B |
      //       - - -  <<prev--    - - - - - - - -   <<prev--   - - -
      //       - - -  --next>>   - - -
      // From: | A |             | B |
      //       - - -  <<prev--   - - -
      currentNode!.previous!.next = currentNode!.next;
      currentNode!.next!.previous = currentNode!.previous;
      this.length--;
    }
  }

  // Delete the first occurrence of the given element
  deleteElementForward(data: number) {
    // Find the index of the element
    const position = this.searchForward(data);
    if (position === -1)
      throw new Error("The element was not found in the list");

    // Delete the element at the given position
    this.deleteAtPosition(position);
  }

  // Delete the last occurrence of the given element
  deleteElementBackward(data: number) {
    // Find the index of the element
    const position = this.searchBackward(data);
    if (position === -1)
      throw new Error("The element was not found in the list");

    // Delete the element at the given position
    this.deleteAtPosition(position);
  }

  // Print the list from head to tail
  displayForward() {
    if (this.head === null) {
      throw new Error("Cannot print an empty list");
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(`Current data: ${currentNode.data}`);
      currentNode = currentNode.next!;
    }
  }

  // Print the list from tail to head
  displayBackward() {
    if (this.tail === null) {
      throw new Error("Cannot print an empty list");
    }

    let currentNode = this.tail;
    while (currentNode !== null) {
      console.log(`Current data: ${currentNode.data}`);
      currentNode = currentNode.previous!;
    }
  }
}
