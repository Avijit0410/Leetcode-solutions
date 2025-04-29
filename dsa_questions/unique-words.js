/**
s1 = "this apple is sweet"
s2 = "this apple is sour"
output = ["sweet", "sour"]

s1 = "apple apple"
s2 = "banana"
output = ["banana"]
 */

let s1 = "apple apple"
let s2 = "banana"

function uncommonword(s1, s2){
    let sarr = [ ...s1.split(" "), ...s2.split(" ")];

    let obj = {}
    for( let word of sarr ){
        obj[word] = obj[word] + 1 || 1
    }

    return sarr.filter( word => obj[word] === 1 )
}

console.log( uncommonword(s1,s2))  