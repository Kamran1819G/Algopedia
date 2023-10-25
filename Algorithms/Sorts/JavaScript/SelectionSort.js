function selectionSort(arr) { 
        
    for(let i = 0; i < arr.length; i++) {

        let min_index = i;

        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[j] < arr[min_index])
            {
                min_index = j; 
            }
         }
         if (min_index != i) 
         {
             let temp = arr[i]; 
             arr[i] = arr[min_index];
             arr[min_index] = temp;      
        }
    }
    return arr;
}

console.log(selectionSort([any_data_here]))