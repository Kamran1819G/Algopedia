public static class MergeSort
{
    public static void Sort(int[] array)
    {
        int length = array.Length;
        if (length <= 1)
        {
            return;
        }

        int middle = length / 2;
        int[] leftArray = new int[middle];
        int[] rightArray = new int[length - middle];

        int j = 0;
        
        for (int i = 0; i < length; i++)
        {
            if (i < middle)
            {
                leftArray[i] = array[i];
            }
            else
            {
                rightArray[j] = array[i];
                j++;
            }
        }
        Sort(leftArray);
        Sort(rightArray);
        
        // Check if merge is necessary
        if (leftArray[middle - 1] <= rightArray[0])
        {
            Array.Copy(leftArray, 0, array, 0, middle);
            Array.Copy(rightArray, 0, array, middle, length - middle);
            return;
        }
        
        Merge(leftArray, rightArray, array);
    }
    
    private static void Merge(int[] leftArray, int[] rightArray, int[] array)
    {
        int leftSize = array.Length / 2;
        int rightSize = array.Length - leftSize;
        int i = 0, l = 0, r = 0;

        while (l < leftSize && r < rightSize)
        {
            if (leftArray[l] < rightArray[r])
            {
                array[i] = leftArray[l];
                i++;
                l++;
            }
            else
            {
                array[i] = rightArray[r];
                i++;
                r++;
            }
        }

        while (l < leftSize)
        {
            array[i] = leftArray[l];
            i++;
            l++;
        }

        while (r < rightSize)
        {
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
    
    public static void Main()
    {
        int[] array = new int[]{ 9, 8, 7, 5, 4, 3, 2, 1};
        
        Console.WriteLine("Unsorted array:");
        PrintArray(array);

        
        Sort(array);
        
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