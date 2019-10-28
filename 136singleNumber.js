/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//  题目要求不开辟额外的地址空间
// 用异或运算，即 相同结果为0 （基于二进制） 题目限定了除了一个元素只出现一次之外 其他元素均出现两次，要是没有这个限定条件，这道题就不能这么解
var singleNumber = function(nums) {
    let res=nums[0];
    for(let i=1;i<nums.length;i++) {
        res^=nums[i];
    }
    return res;
};
// @lc code=end
log(singleNumber([2,2,1]));
log(singleNumber([4,2,1,2,1]));

