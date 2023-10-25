// Factorial using iterative approach
function factorial(num)
{
    if(num >= 0)
    {
        let fact = 1;
        for(let i = 1; i <= num; i++)
        {
            fact *= i;
        }
        return fact;
    }

    else return undefined;
}

console.log(factorial(any_number_here))