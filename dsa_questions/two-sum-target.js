/**

nums = [2, 7, 11, 15 ], target = 9
output = [0, 1] -- return the indices

nums = [3, 2 , 4 ], target = 6
output = [1, 2] -- return the indices

nums = [3,3], target = 6
output = [0, 1] -- return the indices
 */


//Approach 1 - two pointer approach
let nums = [3,2,4]
let target = 6

function twoSum(arr, target){

    let left = 0

    while( left < arr.length - 1 ){

        let right = arr.length - 1 

        while( right > left ){
            if( arr[left] + arr[right] === target ){
                return [ left, right ]
            }
            right--
        }

        left++
    }
}


function twosum1( arr, target){
    let left = 0

    while ( left < arr.length ){

        let right = arr.length - 1

        while( left < right ){
            if( arr[left] + arr[right] === target ){
                return [arr[left], arr[right] ]
            }
            right--
        }

        left++
    }
}

// console.log( twosum1(nums, target) )




//Approach 2 - using hash map
function twoSum_hash(nums, target) {
    let obj = {}  // num : index

    for(let i=0; i<nums.length; i++) {

        let rem = target - nums[i]

        if( obj[rem] !== undefined ){
            return [obj[rem], i]
        }

        obj[nums[i]] = i
    }
}

function twosum_hash1(arr, target){
    let obj = {}

    for( let i=0; i <arr.length; i++){

        let rem = target - arr[i]
        if( obj[rem] !== undefined ){
            return [arr[obj[rem]], arr[i]]
        }

        obj[arr[i]] = i
    }
}

console.log( twosum_hash1(nums, target) )