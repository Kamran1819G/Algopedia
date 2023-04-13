public static class QuickSort
{
    public static void QSort(int[] array, int start, int end)
    {
        if (end <= start)
            return;

        int pivot = Partition(array, start, end);
        QSort(array, start, pivot - 1);
        QSort(array, pivot + 1, end);
    }

    private static int Partition(int[] array, int start, int end)
    {
        int pivot = array[end];
        int i = start - 1;

        for (int j = start; j <= end; j++) {
            if (array[j] < pivot) {
                i++;
                (array[i], array[j]) = (array[j], array[i]); // C# swapping two variables without temp variable
            }
        }
        i++;
        
        (array[i], array[end]) = (array[end], array[i]);

        return i;
    }
    
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Unsorted array:");
        PrintArray(array);

        QSort(array, 0, array.Length - 1);
        
        Console.WriteLine("Sorted array:");
        PrintArray(array);

    }

    private static void PrintArray(int[] array)
    {
        for (int i = 0; i < array.Length; i++)
        {
            Console.Write($"{array[i]} ");
        }
        Console.WriteLine(";");
    }
}