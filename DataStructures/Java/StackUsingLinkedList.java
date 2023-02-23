public class StackUsingLinkedList {
    class Node {
        int data;
        Node link;
    }

    Node top;

    StackUsingLinkedList() {
        this.top = null;
    }

    public void push(int x) {
        Node temp = new Node();
        temp.data = x;
        temp.link = top;
        top = temp;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public int peek() {
        if (!isEmpty()) {
            return top.data;
        } else {
            System.out.println("Stack is empty");
            return -1;
        }
    }

    public void pop() {
        if (top == null) {
            System.out.print("\nStack Underflow");
            return;
        }
        top = top.link;
    }

    public void display() {
        if (top == null) {
            System.out.printf("\nStack Underflow");
            return;
        } else {
            Node temp = top;
            while (temp != null) {
                System.out.println(temp.data);
                temp = temp.link;
            }
        }
    }

    public static void main(String[] args) {
        StackUsingLinkedList stack = new StackUsingLinkedList();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.pop();
        stack.display();
    }

}
