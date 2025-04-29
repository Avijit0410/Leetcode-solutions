function countingSort(arr, maxVal) {
    let count = new Array(maxVal+1).fill(0);
    let result = [];

    for (let num of arr) count[num]++;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    return result;
}
