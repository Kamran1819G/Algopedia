#include <stdio.h>

void bubbleSort(int array[], int size)
{
    int i, j, temp;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size - i - 1; j++)
        {
            if (array[j] > array[j + 1])
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

int main()
{
    int array[10] = {9, 1, 8, 2, 7, 10, 3, 6, 4, 5};
    bubbleSort(array, 10);
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", array[i]);
    }
}
