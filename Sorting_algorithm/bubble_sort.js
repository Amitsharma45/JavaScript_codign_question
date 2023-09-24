// Bubble sort in js
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
// Time complexity: O(n^2)
// Space complexity: O(1)


function bubbleSort(arr){var ans=[];
    var n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let arr=[1,2,243,656,4,7,43,0];
console.log(bubbleSort(arr))