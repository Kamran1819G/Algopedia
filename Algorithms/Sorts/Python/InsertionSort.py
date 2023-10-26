
def insertionSort(arr): 
      
    if len(arr) <= 1:
        return 
 
    for i in range(1, len(arr)):  
        key = arr[i]  
        j = i-1
        while j >= 0 and key < arr[j]:  
            arr[j+1] = arr[j]  
            j -= 1
        arr[j+1] = key  

    return arr


print(insertionSort([any_data_here]))
