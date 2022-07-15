let x = twoNums(([2,7,11, 15]), ([ 9]))
function twoNums(nums, target){
    let emptiArr = []
    let indexMap = new Map();
    for (let i = 0; i <nums.length; i++){
        let difference = target - nums[i]
        if(indexMap.has(difference)){
            emptiArr[0] = i;
            emptiArr[1] = indexMap.get(difference);
            break;

        } else {
            indexMap.set(nums[i], i);
        }
    }
    return emptiArr;
    console.log(emptiArr(x))
}

console.log((x))


// let twoSum =(nums, target)=>{
//     let emptyObj = {}
//     for(let i=0; i < nums.length; i++){
//         if(emptyObj[target - nums] !== undefined){
//             return [emptyObj[target - nums[i]], i]
//         }
//         emptyObj[nums[i]] = i
//     }
// }
// let result = twoSum.Map([2,7,11,15], 9)



