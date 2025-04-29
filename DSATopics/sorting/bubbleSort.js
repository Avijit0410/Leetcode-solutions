
/**
[5, 3, 8, 6]
Compare 5 & 3 → Swap
[3, 5, 8, 6]
Compare 5 & 8 → OK
Compare 8 & 6 → Swap
[3, 5, 6, 8]
Repeat till no swaps.



Bubble = Swap Adjacent
Selection = Find Min & Place
Insertion = Pick & Place in sorted
Merge = Divide & Merge
Quick = Pivot & Partition
Heap = Max-Heapify & Swap
Counting = Count & Place
Radix = Digit-wise Counting Sort

 */

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}


function bubbleSort_pract(arr){
    let n = arr.length

    for( let i=0; i<n-1; i++){
        for( let j=0; j<n-i-1; j++){
            if( arr[j]> arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }

    return arr
}

console.log(bubbleSort_pract([2, 6, 3, 4, 1, 5]))


