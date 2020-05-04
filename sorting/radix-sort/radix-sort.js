


// returns the digit in num at the given place value
// E: (7589, 2) => 5
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}