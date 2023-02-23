#include <stdio.h>

int linearSearch(int array[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (array[i] == key)
        {
            return i;
        }
    }
    return -1;
}

int main()
{
    int array[10] = {9, 1, 8, 2, 7, 10, 3, 6, 4, 5};
    int key = 10;
    int index = linearSearch(array, 10, key);
    if (index == -1)
    {
        printf("Element not found");
    }
    else
    {
        printf("Element found at index %d", index);
    }
}
