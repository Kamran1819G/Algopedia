// TypeScript code for the above approach

// Function to build Monotonic
// increasing stack
function increasingStack(a: number[], N: number): void {
    // Initialise stack
    let stk: number[] = [];

    for (let i = 0; i < N; i++) {

        // Either stack is empty or
        // all bigger nums are popped off
        while (stk.length > 0 && stk[stk.length - 1] > a[i]) {
            stk.pop();
        }
        stk.push(a[i]);
    }

    let N2 = stk.length;
    let ans: number[] = new Array(N2);
    let j = N2 - 1;

    // Empty Stack
    while (stk.length != 0) {
        ans[j] = stk[stk.length - 1];
        stk.pop();
        j--;
    }

    // Displaying the original array
    console.log("The Array: ");
    for (let i = 0; i < N; i++) {
        console.log(a[i] + " ");
    }
    console.log("<br>");

    // Displaying Monotonic increasing stack
    console.log("The Stack: ");
    for (let i = 0; i < N2; i++) {
        console.log(ans[i] + " ");
    }
    console.log("<br>");
}

// Driver code

let array: number[] = [1, 4, 5, 3, 12, 10];
let M = array.length;

// Function Call
increasingStack(array, M);
// This code is contributed by Potta Lokesh



// TypeScript code to implement the approach
// Function to find a Monotonic
// decreasing stack
function decreasingStack(arr: number[], N: number): void {

    // initialising Stack
    let stk: number[] = [];
    for (let i = 0; i < N; i++) {

        // Either stack empty or
        // all smaller nums are popped off
        while (stk.length > 0 && stk[0] < arr[i]) {
            stk.shift();
        }
        stk.unshift(arr[i]);
    }
    let N2 = stk.length;
    let ans: number[] = Array(N2).fill(0);
    let j = N2 - 1;
    // Empty stack
    while (stk.length != 0) {
        ans[j] = stk[0];
        stk.shift();
        j--;
    }

    // Displaying the original array
    console.log("The Array: ");
    for (let i = 0; i < N; i++) {
        console.log(arr[i]);
    }

    // Displaying Monotonic Decreasing Stack
    console.log("The Stack: ");
    for (let i = 0; i < N2; i++) {
        console.log(ans[i]);
    }
}

// Driver code
let arr: number[] = [15, 17, 12, 13, 14, 10];
let N = arr.length;

// Function call
decreasingStack(arr, N);

// This code is contributed by ishankhandelwals.