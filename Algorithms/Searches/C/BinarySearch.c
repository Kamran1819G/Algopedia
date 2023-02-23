#include <stdio.h>

int binarySearch(int array[], int size, int key)
{
    int low = 0;
    int high = size - 1;
    while (low <= high)
    {
        int mid = (low + high) / 2;
        if (array[mid] == key)
        {
            return mid;
        }
        else if (array[mid] < key)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}

int main()
{
    int array[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int key = 10;
    int index = binarySearch(array, 10, key);
    if (index == -1)
    {
        printf("Element not found");
    }
    else
    {
        printf("Element found at index %d", index);
    }
}