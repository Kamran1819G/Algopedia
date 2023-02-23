#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL;

void insertatbeg(int data)
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = data;
    newnode->next = head;
    head = newnode;
}

void insertatend(int data)
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = data;
    newnode->next = NULL;
    if (head == NULL)
    {
        head = newnode;
    }
    else
    {
        struct node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = newnode;
    }
}

void deleteatbeg()
{
    if (head == NULL)
    {
        printf("List is empty");
    }
    else
    {
        struct node *temp = head;
        head = head->next;
        free(temp);
    }
}

void deleteatend()
{
    if (head == NULL)
    {
        printf("List is empty");
    }
    else
    {
        struct node *temp = head;
        while (temp->next->next != NULL)
        {
            temp = temp->next;
        }
        free(temp->next);
        temp->next = NULL;
    }
}

void display()
{
    struct node *temp = head;
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}

int main()
{
    insertatbeg(10);
    insertatbeg(20);
    insertatbeg(30);
    insertatbeg(40);
    insertatbeg(50);
    insertatend(60);
    insertatend(70);
    insertatend(80);
    insertatend(90);
    insertatend(100);
    display();
    printf("\n");
    deleteatbeg();
    deleteatend();
    display();
}