public static class InsertionSort
{
    public static void InsSort(int[] array)
    {
        for (int i = 1; i < array.Length; i++) {
            int temp = array[i];
            int j = i - 1;

            while (j >= 0 && array[j] > temp) {
                array[j + 1] = array[j];
                j--;
            }
            
            array[j + 1] = temp;
        }
    }
    
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Unsorted array:");
        PrintArray(array);

        InsSort(array);
        
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