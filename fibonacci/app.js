
// O(2^n)
function fibonacciRecursive(n) {
  // base case
  if (n === 0 || n === 1) return n;
  // recursive case
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

// O(n)
function fibonacciIterative(n) {
  let first = 0;
  let second = 1;
  let third;

  if (n === 0 || n === 1) return n;

  for (let i = 2; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
}

console.log(fibonacciIterative(43));
console.log(fibonacciRecursive(43));