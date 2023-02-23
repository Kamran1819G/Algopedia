#include <stdio.h>

void selectionSort(int array[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        int min = i;
        for (int j = i + 1; j < size; j++)
        {
            if (array[j] < array[min])
            {
                min = j;
            }
        }
        int temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
}

int main()
{
    int array[10] = {9, 1, 8, 2, 7, 10, 3, 6, 4, 5};
    selectionSort(array, 10);
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", array[i]);
    }
}