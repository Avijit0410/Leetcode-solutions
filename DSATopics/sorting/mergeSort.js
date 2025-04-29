/**
[5, 3, 8, 6]
Divide → [5,3] [8,6]
[5,3] → [5] [3] → Merge → [3,5]
[8,6] → [8] [6] → Merge → [6,8]
Final Merge → [3,5,6,8]

 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    // Jab tak dono me se koi bhi array khatam na ho
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Jo elements bach gaye ho unko add kar do
    return result.concat(left.slice(i)).concat(right.slice(j));
}





function mergeSort_pract(arr) {
    if( arr.length <= 1) return arr
    
    let mid = Math.floor( arr.length / 2);
    let left = mergeSort_pract(arr.slice(0, mid))
    let right = mergeSort_pract(arr.slice(mid))

    return merge_prect(left, right)
}


function merge_prect(left, right){
    let result = [], i=0, j=0

    while( i<left.length && j<right.length){
        if( left[i] < right[j] ){
            result.push(left[i])
            i++
        }
        else {
            result.push(right[j])
            j++
        }
    }

    
}

console.log( mergeSort_pract([2, 6, 3, 4, 1, 5]))