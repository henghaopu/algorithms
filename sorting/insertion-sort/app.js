
/*
  固定第一張牌

       i=1...length-1
       ↓  --> 
 E: [⚁,3,4,5,1]
     

    [⚁,⚂,⚃,⚄,1]
      <--  ↑      && arr[j] > draw  ===  IF arr[j] > draw THEN arr[j+1] = arr[j]
     0     j=i-1                         ELSE break;
                                         arr[j+1] = draw

*/

// elegant
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let draw = arr[i];  // 拿牌
    for (var j = i - 1; j > -1 && arr[j] > draw; j--) { 
      arr[j+1] = arr[j];
    }
    arr[j+1] = draw;  // 放牌
  }
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let draw = arr[i];  
    for (let j = i - 1; j > -1; j--) { 
      if (arr[j] > draw) {
        arr[j+1] = arr[j];
        if (j === 0) arr[j] = draw;
      } else {
        arr[j+1] = draw;
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2,3,4,5,1]))
console.log(insertionSort2([2,3,4,5,1]))