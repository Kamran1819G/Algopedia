#include <stdio.h>

void insertionSort(int array[], int size)
{
    for (int i = 1; i < size; i++)
    {
        int temp = array[i];
        int j = i - 1;
        while (j >= 0 && array[j] > temp)
        {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}

int main()
{
    int array[10] = {9, 1, 8, 2, 7, 10, 3, 6, 4, 5};
    insertionSort(array, 10);
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", array[i]);
    }
}