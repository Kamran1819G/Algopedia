public class DoublyLinkedList {
	class Node {
		int data;
		Node next;
		Node prev;

		Node(int data) {
			this.data = data;
		}
	}

	Node head = null;
	Node tail = null;

	public void insertNode(int data) {
		Node newnode = new Node(data);
		if (head == null) {
			head = newnode;
			tail = newnode;
			head.next = null;
			head.prev = null;
		} else {
			tail.next = newnode;
			newnode.prev = tail;
			tail = newnode;
			tail.next = null;
		}
	}

	public void display() {
		Node current = head;
		if (head == null) {
			System.out.println("list is empty");
			return;
		}
		while (current != null) {
			System.out.println(current.data + " ");
			current = current.next;
		}
	}

	public void deletenode(int key) {
		Node current = head;
		Node previous = null;
		if (head == null) {
			System.out.println("list is empty");
			return;
		}
		if (current != null && current.data == key) {
			head = current.next;
		}
		while (current != null && current.data != key) {
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
	}

	public static void main(String[] args) {
		DoublyLinkedList node = new DoublyLinkedList();
		node.insertNode(7);
		node.insertNode(8);
		node.insertNode(3);
		node.display();
		node.deletenode(3);
		node.display();
	}
}
