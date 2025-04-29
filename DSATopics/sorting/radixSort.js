function getMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

function countingSortByDigit(arr, place) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    // Count occurrences
    for (let i = 0; i < n; i++) {
        let digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    // Cumulative count
    for (let i = 1; i < 10; i++) {
        count[i] += count[i-1];
    }

    // Build output array (stable sort)
    for (let i = n-1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / place) % 10;
        output[count[digit]-1] = arr[i];
        count[digit]--;
    }

    // Copy back to original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    let max = getMax(arr);

    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        countingSortByDigit(arr, place);
    }

    return arr;
}
