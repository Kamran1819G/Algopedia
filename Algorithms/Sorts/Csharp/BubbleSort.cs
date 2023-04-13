public static class BubbleSort
{
    public static void BubSort(int[] array)
    {
        bool isSwapped; // If an iteration passes without a swap, it means that the array is sorted.
        int n = array.Length;
        
        do
        {
            isSwapped = false;
            for (int i = 1; i < n; i++)
            {
                if (array[i - 1] > array[i])
                {
                    (array[i - 1], array[i]) = (array[i], array[i - 1]); // C# swapping two variables without temp variable
                    isSwapped = true;
                }
            }
            n--;
        } while (isSwapped);
    }

    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Unsorted array:");
        PrintArray(array);

        BubSort(array);
        
        Console.WriteLine("Sorted array:");
        PrintArray(array);

    }

    private static void PrintArray(int[] array)
    {
        for (int i = 0; i < array.Length; i++)
        {
            Console.Write($"{array[i]} ");
        }
        Console.WriteLine("");
    }
}

