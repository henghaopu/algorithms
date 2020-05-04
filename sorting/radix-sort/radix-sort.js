


// return the digit in num at the given place value
// E: (7589, 2) => 5
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// return the number of digits in num
// E: (0) => 1, (10) => 2, (100) => 3
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// Given an array of numbers, return the number of digits in the largest number in the list
// ([1234,56,7]) => 4, ([1,1,11111,1]) => 5 ([12,34,56,78]) => 2
function mostDigits(nums) {
  let maxDigits = -Infinity;
  nums.forEach((num) => {
    // let currentDigitCount = digitCount(num);
    // if (currentDigitCount > maxDigits) maxDigits = currentDigitCount;
    maxDigits = Math.max(maxDigits, digitCount(num));
  })
  return maxDigits;
}