function BubbleSort(arr)
{
    let i, j, temp;
    for(i=0; i<arr.length; i++)
    {
        for(j=0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(BubbleSort([add_any_number]))
