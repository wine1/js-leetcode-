/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  要求原地旋转，不开辟额外的地址空间

// 这种写法逻辑能跑通，结果是对的 但是过不了leetcode的测试
// var rotate = function(nums, k) {
//     for(let i=0;i<k;i++) {
//     let a=nums.splice(-1,1);
//     nums=a.concat(nums);
//     log(nums);
//     }
//     log(nums);
//     return nums;

// };

// 上述写法报错的原因分析：
// js中所有的函数的参数都是按<strong>值传递</strong>的，也就是说把函数外部的值复制给函数内部的参数，就相当于把值从一个变量复制到另一个变量 如下用例输出的结果会是[1,2,3,4,5,6]


// 注意需要考虑k>sums.length的情况
var rotate = function(nums, k) {
  k %= nums.length;
  var tmp = [];
  if (k) tmp = nums.slice(-k);
  nums.splice(-k, k);

  Array.prototype.unshift.apply(nums, tmp);
};
log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
