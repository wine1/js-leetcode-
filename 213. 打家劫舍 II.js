// https://leetcode-cn.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */

//  假定偷窃当前这户 i 那么dp[i]=max(dp[i-2],dp[i-3])+nums[i]
//  因为是环状 所以要考虑 第一间和最后一间不能同时抢
//  1. 拆成两条单列
var rob = function(nums) {
    let len=nums.length
    if(len===1) return nums[0]
    let nums1=nums.slice(0,len-2)
    let nums2=nums.slice(1,len-1)
    let res1=funcdp(nums1)
    let res2=funcdp(nums2)
    return Math.max(res1,res2)
};

function funcdp(nums) {
    let dp=[]
    for(let i=2;i<nums.length;i++) {
        dp[i]=Math.max(dp[i-2],dp[i-3])+nums[i]
    }
}

console.log(rob([2,3,2]))
console.log(rob([1,2,3,1]))
console.log(rob([0]))