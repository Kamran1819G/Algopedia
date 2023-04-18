public static class LinearSearch
{
    
    // Implement LinearSearch as extension method of int array
    // Our method returns index of target element.
    
    public static int LinSearch(this int[] array, int target)
    {
        for (int i = 0; i < array.Length; i++)
        {
            if (array[i] == target)
            {
                return i;
            }
        }

        return -1; // If there is no target element in the array, return -1 
    }
    
    
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Our array:");
        
        int target = 5;
        
        Console.WriteLine($"Looking for an element that is equal to {target}.}");
        
        Console.WriteLine($"Element found at: {array.LinSearch(target)}");
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