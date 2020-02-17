const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// like arranging Mahjong tiles initially
function insertionSort(array) {
  let newArray = []
  // 拿牌
  for (let i = 0; i < array.length; i++) {
    // 排牌
    if (i === 0) newArray.push(array[i])
    else {
      for (let j = newArray.length - 1; j >= 0; j--) {
        if (newArray[j] > array[i]) {
          // shifting
          newArray[j + 1] = newArray[j];
          if (!newArray[j - 1] || newArray[j - 1] < array[i]) {
            newArray[j] = array[i];
          }
        } else {
          newArray[j + 1] = array[i];
          break;
        }
      }
    }
  }
  return newArray;
}

console.log(insertionSort(numbers));

function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j]
        if (j === 0) array[j] = temp;
      } else {
        array[j + 1] = temp;
        break;
      }
    }
  }

  return array;
}

insertionSort2(numbers);
console.log(numbers);