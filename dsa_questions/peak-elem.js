let arr = [1, 3, 5, 7, 6, 4, 2];

function findPeak(arr){
    let start = 0
    let end = arr.length - 1

    while( start < end ){
        let mid = Math.floor((start+end) / 2)

        if( arr[mid] < arr[mid + 1]){
            start = mid +1
        }
        else {
            end = mid
        }
    }

    return arr[start]
}

console.log( findPeak(arr))