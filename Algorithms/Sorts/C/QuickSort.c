#include <stdio.h>

void partition(int array[], int low, int high, int *i, int *j)
{
    int pivot = array[low];
    *i = low;
    *j = high;
    while (1)
    {
        while (array[*i] < pivot)
        {
            (*i)++;
        }
        while (array[*j] > pivot)
        {
            (*j)--;
        }
        if (*i >= *j)
        {
            return;
        }
        int temp = array[*i];
        array[*i] = array[*j];
        array[*j] = temp;
        (*i)++;
        (*j)--;
    }
}
void quickSort(int array[], int low, int high)
{
    if (low < high)
    {
        int i, j;
        partition(array, low, high, &i, &j);
        quickSort(array, low, j);
        quickSort(array, j + 1, high);
    }
}

int main()
{
    int array[10] = {9, 1, 8, 2, 7, 10, 3, 6, 4, 5};
    quickSort(array, 0, 9);
    for (int i = 0; i < 10; i++)
    {
        printf("%d ", array[i]);
    }
}