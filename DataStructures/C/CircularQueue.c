#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1;
int rear = -1;

int isFull()
{
    if (front == 0 && rear == MAX - 1)
    {
        return 1;
    }
    if (front == rear + 1)
    {
        return 1;
    }
    return 0;
}

int isEmpty()
{
    if (front == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void insert(int item)
{
    if (isFull())
    {
        printf("\nQueue is full");
    }
    else
    {
        if (front == -1)
        {
            front = 0;
        }
        rear = (rear + 1) % MAX;
        queue[rear] = item;
    }
}

int delete()
{
    int item;
    if (isEmpty())
    {
        printf("\nQueue is empty");
        item = -1;
    }
    else
    {
        item = queue[front];
        if (front == rear)
        {
            front = -1;
            rear = -1;
        }
        else
        {
            front = (front + 1) % MAX;
        }
    }
    return item;
}

void display()
{
    int i;
    if (front == -1)
    {
        printf("\nQueue is empty");
    }
    else
    {
        printf("\nQueue is: ");
        for (i = front; i <= rear; i++)
        {
            printf("%d ", queue[i]);
        }
    }
}

int main()
{
    insert(1);
    insert(2);
    insert(3);
    insert(4);
    insert(5);
    display();
    delete ();
    display();
    return 0;
}