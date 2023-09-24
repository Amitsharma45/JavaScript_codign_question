// Selection sort in js
// Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

// Time complexity: O(n^2)
// Space complexity: O(1)

function SelectionSort(arr){
    let n =arr.length;

    for(let i=0;i<n-1;i++){
        let minINDex= i;
        for( let j=i+1;j<n;j++){
            if(arr[j]<arr[minINDex]){
                minINDex=j;
            }
        }
       if(i!==minINDex){
        [arr[i],arr[minINDex]]=[arr[minINDex],arr[i]]
       }
    }
    return arr;
}

let arr=[1,2,243,656,4,7,43,0];
console.log(SelectionSort(arr))