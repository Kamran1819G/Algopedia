public class QueueUsingLinkedList {
	class Node {
		int data;
		Node next;

		Node(int data) {
			this.data = data;
			this.next = null;
		}
	}

	Node front, rear = null;

	public void enqueue(int item) {
		Node newNode = new Node(item);
		if (rear == null) {
			front = rear = newNode;
			return;
		}
		rear.next = newNode;
		rear = newNode;
	}

	public void dequeue() {
		if (front == null)
			return;
		front = front.next;
		if (front == null)
			rear = null;

	}

	public void display() {
		if (front == null)
			return;
		while (front != null) {
			System.out.println(front.data);
			front = front.next;
		}
	}

	public static void main(String[] args) {

		QueueUsingLinkedList queue = new QueueUsingLinkedList();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.enqueue(4);
		queue.enqueue(5);
		queue.display();

	}

}
