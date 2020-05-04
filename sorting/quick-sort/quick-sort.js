/**
 *  Pivot helper
 *     s             e
 *     p
 *    [4,6,1,3,5,7,2,8]
 *       ↑  
 *       i=start+1...end
 * 
 *     p
 *    [4,
 *        
 *       6,1,3,5,7,2,8]
 *         ↑
 *       p                    p
 *       6,1,3,5,7,2,8]       1,6,3,5,7,2,8]
 *         ↑                    ↑
 *        1<4   ->  p++  ->     swap arr[p] and arr[↑] 
 *       
 *       p              p+1->   p
 *       1,6,3,5,7,6,8]       1,3,6,5,7,2,8]
 *           ↑                    ↑
 *          3<4                  swap arr[p] and arr[↑] 
 *    
 */

function pivot(arr, start = 0, end = arr.length - 1) {

  // assume the pivot is always the first element
  let pivot = arr[start];
  // set up the initial value of the returning pivot index
  let currentPivotIdx = start; 
  // move/swap elements besides pivot to form two piles and track the last position of the fist pile for the final swap
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      currentPivotIdx++;
      [arr[currentPivotIdx], arr[i]] = [arr[i], arr[currentPivotIdx]];    
    }
  }
  [arr[start], arr[currentPivotIdx]] = [arr[currentPivotIdx], arr[start]];
  console.log(arr);
  return currentPivotIdx;
}


console.log(pivot([4,6,1,3,5,7,2,8]));