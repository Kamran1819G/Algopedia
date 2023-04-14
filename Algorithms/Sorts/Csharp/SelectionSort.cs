public static class SelectionSort
{
    public static void SelectSort(int[] array)
    {
        for (int i = 0; i < array.Length - 1; i++)
		{
            int min = i;
            for (int j = i + 1; j < array.Length; j++)
			{
                if (array[min] > array[j]) 
				{
                    min = j;
                }
            }

            (array[i], array[min]) = (array[min], array[i]); // C# swapping two variables without temp variable
        }
    }
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Unsorted array:");
        PrintArray(array);

        SelectSort(array);
        
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