public class Stack {

	int maxSize;
	long[] array;
	int top;

	public Stack(int i) {
		maxSize = i;
		array = new long[maxSize];
		top = -1;
	}

	public void push(long j) {
		array[++top] = j;
	}

	public long pop() {
		return array[top--];
	}

	public long peek() {
		return array[top];
	}

	public boolean isEmpty() {
		return (top == -1);
	}

	public boolean isFull() {
		return (top == maxSize - 1);
	}

	public static void main(String[] args) {
		Stack stack = new Stack(10);
		stack.push(10);
		stack.push(20);
		stack.push(30);
		stack.push(40);
		stack.push(50);

		while (stack.isEmpty() == false) {
			long value = stack.pop();
			System.out.println(value);
		}
	}

}
