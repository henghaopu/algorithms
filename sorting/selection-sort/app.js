const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// not the real selection sort 
// but their general ideas are the same
// like 7 to smoke + ranking 
// defending champion system for 1st place, 2ng place, 3rd place, ...
// Time: O(n * (3n))
// Space: O(1)
function selectionSort1(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        // swap
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Time: O(n * (n + 3))
// Space: O(1 + 2)
function selectionSort2(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexWithMinValue = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexWithMinValue]) {
        // record the smaller number
        indexWithMinValue = j;
      }
    }
    let temp = array[i];
    array[i] = array[indexWithMinValue];
    array[indexWithMinValue] = temp;
  }
  return array;
}

// selectionSort1(numbers);
selectionSort2(numbers);
console.log(numbers);