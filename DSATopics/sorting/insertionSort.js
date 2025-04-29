/**
[5, 3, 8, 6]
3 < 5 → Insert before
[3, 5, 8, 6]
8 OK
6 < 8 → Shift 8, 5 → Insert 6
[3, 5, 6, 8]

 */

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Shift elements greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;

        console.log(`After pass ${i}:`, arr);
    }

    return arr;
}



function insertion_pract(arr){
    let n = arr.length

    for(let i=0; i<n; i++){
        let key = arr[i]
        let j = i - 1

        while (j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--
        }

        arr[j+1] = key
    }

    return arr
}

console.log(insertion_pract([2, 6, 3, 4, 1, 5]))