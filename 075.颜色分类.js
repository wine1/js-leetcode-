/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let prev=0,next=nums.length-1
    const swap=(a,b)=>{
        const temp=nums[a]
        nums[a]=nums[b]
        nums[b]=temp
    }
    for(let i=0;i<=next;i++) {
        console.log(prev,next,i)
        if(nums[i]===0) {
            swap(i,prev)
            prev++
        }else if(nums[i]===2) {
            swap(i,next)
            next--
            i=i-1
        }
        console.log(nums)
    }
    return nums
};
console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,1]))
console.log(sortColors([0,1,2]))
console.log(sortColors([1,2,0]))
console.log(sortColors([0,0,1,1,2,2]))
console.log(sortColors([1,2,0,2,1,0]))