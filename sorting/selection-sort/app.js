

/*    i=0... < length-1         initial champion = i
      ↓   --> 
  E: [2,3,4,5,1]
        ↑   -->     
        j=i+1... < length       IF arr[j] < arr[champ] THEN champ = j

                              IF champ != i THEN swap
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let champ = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[champ]) champ = j;
    }
    if (champ != i) [arr[i], arr[champ]] = [arr[champ], arr[i]];
  }
  return arr;
}

console.log(selectionSort([2,3,4,5,1]))