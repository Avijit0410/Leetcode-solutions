/**
[5, 3, 8, 6]
Find Min (3) → Swap with 5
[3, 5, 8, 6]
Find Min (5) → Already there
Find Min (6) → Swap with 8
[3, 5, 6, 8]
 */

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIdx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}


function selectsort(arr){
    let n = arr.length

    for( let i = 0; i < n-1; i++){
        let minidx = i

        for( let j = i+1; j<n; j++){
            if( arr[j] < arr[minidx] ){
                minidx = j
            }
        }

        [arr[i], arr[minidx] ] = [arr[minidx], arr[i]]
    }

    return arr
}

console.log( selectsort([2, 6, 3, 4, 1, 5]))