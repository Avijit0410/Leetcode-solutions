// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//[ [i, j , k] ]
// Example 1:
// 
let nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1,2,-1],[-1,0,1],[0,1,-1]]

// let nums = [-1,1,1,2,-1,-4]


function triplet(nums) {
    const result = []

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++
                right--
            }
            else if (sum < 0) {
                left++
            }
            else {
                right--
            }
        }
    }

    console.log(result)
}


function triplet_pract(nums){
    for( let i =0; i< nums.length; i++){
        for( let j = i+1; j< nums.length; j++){
            for( let k = j+1; k< nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    console.log([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
}



let nums_pract = [-1, 0, 1, 2, -1, -4]
function triplet_pract2(nums){

    nums.sort((a, b) => a - b)
    let result = []

    for( let i = 0; i< nums.length-1; i++){

        let left = i + 1
        let right = nums.length - 1

        while( left < right ){
            let sum = nums[i] + nums[left] + nums[right]

            if ( sum === 0 ){
                result.push ([ nums[i], nums[left], nums[right] ])
                left ++
                right --
            }
            else if( sum < 0 ){
                left ++
            }
            else{
                right --
            }
        }
    }

    console.log(result)
}

triplet_pract2(nums_pract)