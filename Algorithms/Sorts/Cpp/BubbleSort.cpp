#include <iostream>

using namespace std;

void swap(int *xp, int *yp);
void bubbleSort(int *arr, int n);
void printArray(int *arr, int n);

int main(){
    // sort 8, 5, 3, 1, 9, 6, 0, 7, 4, 2
    int arr[] = {8, 5, 3, 1, 9, 6, 0, 7, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printArray(arr, n);
    return 0;
}

void bubbleSort(int *arr, int n)
{
    for (int i = 0; i < n; i++) // go through the array n times
    {
        for (int j = 0; j < n - 1; j++) // -1 because we are comparing j and j+1
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
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
