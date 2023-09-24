// Quick Sort
// QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
// Time complexity: O(nlogn)
// Space complexity: O(n)
function quickSort(arr) {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    }

    const pivot = arr[0];
    let left_arr=[];
    let right_arr=[];

    
    for(let i=1;i<n;i++){
        if(arr[i]<pivot){
            left_arr.push(arr[i]);
        }else{
            right_arr.push(arr[i]);
        }
    }

    return [...quickSort(left_arr),pivot,...quickSort(right_arr)];

}

let arr = [2, 3, 243, 3354322, 2324, 232, 1, 10, 233, 0];
console.log(quickSort(arr))