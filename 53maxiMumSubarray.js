/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max=nums[0];
    var sum=max;
    for(var i=0;i<nums.length;i++) {
        for(var j=i;j<nums.length;j++) {
            sum=parseInt(sum)+parseInt(nums[j]);
            if(max<sum) {
                max=sum;
            }else {
                continue;
            }
        }
    }
    return max;
};

log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));