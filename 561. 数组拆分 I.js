// https://leetcode-cn.com/problems/array-partition-i/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>{return a-b})
    let res=0
    let n=nums.length
    for(let i=0;i<n;i=i+2){
        res+=nums[i]
    }
    return res
};