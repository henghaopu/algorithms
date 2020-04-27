function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left < right) {
      // edge case: IF left/right matches
      if (arr[left] === val) return left;
      if (arr[right] === val) return right;
      // CALCULATE/UPDATE middle
      middle = Math.ceil((left + right) / 2);
      // IF middle is larger THEN move right 
      if (arr[middle] > val) right = middle - 1;
      // IF middle is smaller THEN move left 
      else if (arr[middle] < val) left = middle + 1; 
      // IF middle matches THEN return middle
      else return middle;
  }
  return -1;
}

