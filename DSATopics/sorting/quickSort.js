/**
[5, 3, 8, 6] pivot=5
Left < 5 → [3]
Right > 5 → [8,6]
Recursively Quick Sort [3] and [8,6]

 */

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
