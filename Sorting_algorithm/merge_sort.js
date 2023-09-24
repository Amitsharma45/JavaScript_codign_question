// merge sort 
// Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. Merge sort divides the array in two halves, recursively sorts them and finally merges the two sorted halves.
// Time complexity: O(nlogn)
// Space complexity: O(n)

function merge_sort(arr) {
    let n = arr.length;
    if (n <= 1) {
        return arr;
    }

    let m = Math.floor(n / 2);
    let left_arr = [];
    let right_arr = [];

    left_arr = arr.slice(0, m);
    right_arr = arr.slice(m);


    return merge(merge_sort(left_arr), merge_sort(right_arr));
}

function merge(left_arr, right_arr) {
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < left_arr.length && j < right_arr.length) {
        if (left_arr[i] < right_arr[j]) {
            ans.push(left_arr[i++]);
        } else {
            ans.push(right_arr[j++]);
        }
    }

    return ans.concat(left_arr.slice(i), right_arr.slice(j));
}

let arr = [2, 3, 243, 3354322, 2324, 232, 1, 10, 233, 0];

console.log(merge_sort(arr))