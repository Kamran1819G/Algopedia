public class SinglyLinkedList {
	public class Node{
		int data;
		Node next;
		public Node(int data){
			this.data = data;
			this.next = null;
		}
	}
	
	Node head = null;
	Node tail = null;
	
	public void insertnode(int data) {
		Node newNode = new Node(data);
		if(head == null) {
			head = newNode;
			tail = newNode;
		}
		else {
			tail.next = newNode;
			tail = newNode;
		}
	}
	
	public void insertAtPosition(int position, int data) {
		if (position < 1)
		    System.out.print("Invalid position");
		if (position == 1) {
		    Node newNode = new Node(data);
		    newNode.next = head;
		    head = newNode;  
		}else {
		    Node newNode= new Node(data);
		    Node current = head;
		    for(int i = 1; i < position-1; i++) {
		      if(current != null) {
		        current = current.next;
		      }
		    }
		    if(current != null) {
		        newNode.next = current.next;
		        current.next = newNode;  
		    }
		}
    }
	
	public void deleteAtHead() {
		head = head.next;
	}
	
	public void deleteSpecficNode(int key) {
		Node current = head;
		Node previous = null;
		if(head == null) {
			System.out.println("list is empty");
			return;
		}
		if(current != null && current.data == key) {
			head = current.next;
		}
		while(current != null && current.data != key) {
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
	}
	
	public void display() {
		Node current = head;
		if (head == null) {
			System.out.println("list is empty");
			return;
		}
		while(current != null) {
			System.out.println(current.data +" ");
			current = current.next;
		}
	}
	
	public static void main(String[] args) {
		SinglyLinkedList node = new SinglyLinkedList();
		node.insertnode(5);
		node.insertnode(4);
		node.insertnode(7);
		node.insertnode(6);
		node.insertAtPosition(1, 9);
		node.insertAtPosition(4, 8);
		node.display();
	}
}

