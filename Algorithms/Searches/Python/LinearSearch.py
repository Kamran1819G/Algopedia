# Linear Search using python
def search(arr, value): 
    for i in range(0, len(arr)): 
        if (arr[i] == value): 
            return i 
    return -1

arr = [any_data_here] 
searchValue = any value 

result = search(arr, searchValue) 
if(result == -1): 
    print("Element is not present") 
else: 
    print("Element is present at index", result) 
