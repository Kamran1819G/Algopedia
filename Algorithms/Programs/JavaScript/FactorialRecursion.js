// Factorial using recursion
function factorial(num) 
{
    if (num >= 0) 
    {
        if (num == 1 || num == 0) 
        {
            return 1;
        }
        let fact = num * factorial(num - 1);
        return fact;
    }

    else return undefined;
}

console.log(factorial(any_number_here));