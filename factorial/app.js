// write two functions that finds the factorial of any number.
// Once should use recursive, the other should just use a for loop.



// e.g. 
//  5! = 5 * 4!
//  1! = 1 * 0!, 0! = 1 (base case)
// O(n): call the function the same number of time as the number itself
function findFactorialRecursive(number) {
  // base case
  if (number === 0) {
    return 1;
  }
  // recursive case
  return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  } 
  return result;
}

// test
console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))