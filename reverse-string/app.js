
function reverseStringRecursive(str) {
  let length = str.split('').length;
  // base case
  if ( length === 0 || length === 1) return str
  // recursive case
  return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

// pure string manipulation (no array)
function reverseStringIterative(str) {
  let output = '';
  for(let i = str.length - 1; i >= 0 ; i--) {
    output = output + str.charAt(i);
  }
  return output;
}

console.log(reverseStringRecursive('Hello123!'))
console.log(reverseStringRecursive(''))
console.log(reverseStringRecursive('a'))

console.log(reverseStringIterative('1'))