/*
                          [1,2,3,4]
                              ⇧
                      mergeSort([4,3,2,1])
                    ⬋ ⬀ [3,4]           ⬊ ⬁  [1,2]
            mergeSort([4,3])               mergeSort([2,1])
          ⬋ ⬀ [4]      ⬊ ⬁ [3]          ⬋ ⬀ [2]      ⬊ ⬁ [1]
mergeSort([4])      mergeSort([3])   mergeSort([2])     mergeSort([1])


Time:  O(nlogn)
Space: 4O(1) -> return -> 0 -> 2O(2) -> return -> 0 -> ...  -> O(n)

*/

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/*

      [2,4,6,8]   [1,3,5]

 */

function merge(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j])
    j++;
  }
  return output;
}

console.log(mergeSort([4,3,2,1]))