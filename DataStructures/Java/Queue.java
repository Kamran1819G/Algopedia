public class Queue {
	int front, rear, capacity;
	long array[];

	Queue(int size) {
		front = rear = 0;
		capacity = size;
		array = new long[capacity];
	}

	public void enqueue(int item) {
		if (capacity == rear) {
			System.out.println("\nQueue is full\n");
			return;
		} else {
			array[rear] = item;
			rear++;
		}
	}

	public void dequeue() {
		if (front == rear) {
			System.out.println("\nQueue is empty\n");
			return;
		} else {
			for (int i = 0; i < rear - 1; i++) {
				array[i] = array[i + 1];
			}
			if (rear < capacity)
				array[rear] = 0;
			rear--;
		}
	}

	public void display() {
		int i;
		if (front == rear) {
			System.out.println("Queue is Empty\n");
			return;
		}
		for (i = front; i < rear; i++) {
			System.out.println(array[i]);
		}
	}

	public static void main(String[] args) {
		Queue queue = new Queue(10);
		queue.enqueue(5);
		queue.enqueue(6);
		queue.enqueue(7);
		queue.display();
		queue.dequeue();
		queue.display();

	}

}
