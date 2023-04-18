public static class BinarySearch
{
    
    // Implement BinarySearch as extension method of int array
    // Our method returns index of target element.
    public static int BinSearch(this int[] array, int target)
    {
        int low = 0;
        int high = array.Length - 1;

        while (low <= high)
        {
            int middle = low + (high - low) / 2;
            int value = array[middle];

            if (value < target)
            {
                low = middle + 1;
            }
            else if (value > target)
            {
                high = middle - 1;
            }
            else
            {
                return middle;
            }
        }

        return -1; // If there is no target element in the array, return -1
    }
    
    
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Our array:");
        PrintArray(array);

        int target = 5;
        
        Console.WriteLine($"Looking for an element that is equal to {target}.}");
        
        Console.WriteLine($"Element found at: {array.BinSearch(target)}");

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