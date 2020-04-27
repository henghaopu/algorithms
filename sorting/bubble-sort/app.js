const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time: O(n^2); O(n) when the data is nearly sorted
// Space: O(1)
function bubbleSort(arr) {
  let upperBound = arr.length - 1;
  let isSwapped; //// for data that is almost sorted
  // repeat arr.length times
  for (let repeat = 0; repeat < arr.length; repeat++) {
    // walk through each pair
    isSwapped = false; //// for data that is almost sorted
    for (let i = 0; i < upperBound; i++) {
      // IF > THEN swap
      if (arr[i] > arr[i+1]) {
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
        isSwapped = true; //// for data that is almost sorted
      }
    }
    if (!isSwapped) break; //// for data that is almost sorted
    upperBound--;
  }
  return arr;
}

// bubbleSort([37,45,29,8])
bubbleSort([5,1,2,3,4,5,6])

bubbleSort(numbers);
console.log(numbers);