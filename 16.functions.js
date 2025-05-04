
function fib1(num) {
    let n1 = 0;
    let n2 = 1;
    for (let i = 1; i <= num; i++) {
        let next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}


// Time Complexity While => O(n)
// Space Complexity: Constant
// Function Call => 50
// Time: 0.000001ms

function fib2(num) {
    let a = 0;
    let b = 1;
    let tmp = 0;
    while (num >= 0) {
        tmp = a;
        a = a + b;
        b = tmp;
        num--;
    }
    return b;
}

// Time Complexity While => O(2^n)
// Space Complexity: O(n)
// Function Call => 20,000,000
// Time: 170ms

function fib3(num) {
    if (num <= 1) {
        return 1
    }

    return fib3(num - 1) + fib3(num - 2);
}


// Time Complexity While => O(2n)
// Space Complexity: O(n)
// Function Call => 99
// Time: 0.000001ms

function fib4(num, memo = {}) {

    if (num <= 1) {
        return 1
    }
    if (memo[num]) {
        return memo[num];
    }

    memo[num]= fib3(num - 1) + fib3(num - 2);
    return memo[num];
}


function fib5(num){
    return new Array(num).fill(1).reduce((arr,c,i)=>{
        arr.push((i<=1)? i : arr[i-1]+arr[i-2]);
        return arr;
    },[]);
}

// console.log(fib5(5));

console.time();
console.log(fib2(50))
console.time('test');

