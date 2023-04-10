#include <iostream>
using namespace std;

void swap(int *xp, int *yp);
void selectionSort(int *arr, int n);
void printArray(int *arr, int n);

int main()
{
    // sort 8, 5, 3, 1, 9, 6, 0, 7, 4, 2
    int arr[] = {8, 5, 3, 1, 9, 6, 0, 7, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, n);
    printArray(arr, n);
    return 0;
}

void selectionSort(int *arr, int n)
{
    int i, j, min_idx;
    // One by one move boundary of
    // unsorted sub-array
    for (i = 0; i < n - 1; i++)
    {
        // Find the minimum element in
        // unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        // Swap the found minimum element
        // with the first element
        if (min_idx != i)
            swap(&arr[min_idx], &arr[i]);
    }
}

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void printArray(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}