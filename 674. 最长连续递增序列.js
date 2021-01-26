/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

var findLengthOfLCIS = function(nums) {
    if(!nums.length) return 0
    let res=1
    let maxRes=res
    for(let i=1;i<nums.length;i++) {
        if(nums[i]>nums[i-1]) {
            res+=1
            maxRes=maxRes>res?maxRes:res
        }else {
            res=1
        }
    }
    return maxRes
};

console.log(findLengthOfLCIS([]))
console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))