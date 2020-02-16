const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// like challenge passing game or LOL
function bubbleSort(array) {
  let upperBound = array.length - 1;
  for (let i = 0; i < upperBound; ) {
    for (let j = 0; j < upperBound; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    upperBound--;
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);