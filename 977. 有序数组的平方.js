/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res=[]
    let l=0,r=nums.length-1
    while(l<=r) {
        if(Math.abs(nums[l])>Math.abs(nums[r])) {
            res.unshift(nums[l]*nums[l])
            l++
        }else {
            res.unshift(nums[r]*nums[r])
            r--
        }
    }
    return res
};
// @lc code=end

console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))
console.log(111)