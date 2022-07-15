function twoNums(nums, target){
    let emptiArr = []
    let indexMap = new Map();
    for (let i = 0; i <nums.length; i++){
        let difference = target - nums[i]
        console.log(difference)
        if(indexMap.has(difference)){
            emptiArr[0] = i;
            emptiArr[1] = indexMap.get(difference);
            break;

        } else {
            indexMap.set(nums[i], i);
        }
    }
    return emptiArr;
}

let x = twoNums(([2,7,11, 15]), ([ 9]))
console.log((x))






