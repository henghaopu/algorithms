const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
  let upperBound = arr.length - 1;
  // repeat arr.length times
  for (let repeat = 0; repeat < arr.length; repeat++) {
    // walk through each pair
    for (let i = 0; i < upperBound; i++) {
      // IF > THEN swap
      if (arr[i] > arr[i+1]) [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
    }
    upperBound--;
  }
  return arr;
}

bubbleSort([37,45,29,8])

bubbleSort(numbers);
console.log(numbers);