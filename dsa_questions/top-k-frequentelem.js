/**
nums = [1,1,1,2,2,3], k=2
output : [1,2]

nums = [1], k=1
output: [1]
 */

let nums = [1,1,1,2,2,3]
let k=2

function topFrequentElem(nums, target){
    let obj = {}

    for(let i=0; i<nums.length; i++){ // creates a hash object  { '1': 3, '2': 2, '3': 1 }
        obj[nums[i]] = obj[nums[i]] + 1 || 1
    }

    //sort the hash obj in desc order as per their freq
    // [[1, 3], [2,2]]
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1])
    
    return sorted.slice(0, k).map(([item]) => item ) // inside object all keys are bydefault string, so in prefix +sign changes it into number
}

console.log( topFrequentElem(nums, k) )


