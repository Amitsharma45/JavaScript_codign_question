// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// Time complexity: O(n^2)
// Space complexity: O(1)
function insertionsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1]=key;
  }
  return arr;


}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionsort(unsortedArray);
console.log(sortedArray); // [11, 12, 22, 25, 34, 64, 90]
