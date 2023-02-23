#include <stdio.h>
#include <stdlib.h>
#define MAX 10

int queue[MAX];
int rear = -1;
int front = -1;

int isFull()
{
    if (rear == MAX - 1)
        return 1;
    else
        return 0;
}

int isEmpty()
{
    if (front == -1 || front > rear)
        return 1;
    else
        return 0;
}

void enqueue(int item)
{
    if (isFull())
        printf("Queue Overflow \n");
    else
    {
        if (front == -1)
            front = 0;
        rear = rear + 1;
        queue[rear] = item;
    }
}
void dequeue()
{
    if (isEmpty())
    {
        printf("Queue Underflow \n");
        return;
    }
    else
    {
        printf("Element deleted from queue is : %d \n", queue[front]);
        front = front + 1;
    }
}
void display()
{
    int i;
    if (front == -1)
        printf("Queue is empty \n");
    else
    {
        printf("Queue is : ");
        for (i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\n");
    }
}
int main()
{
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    enqueue(50);
    enqueue(60);
    enqueue(70);
    enqueue(80);
    enqueue(90);
    enqueue(100);

    display();
    dequeue();
    display();
}