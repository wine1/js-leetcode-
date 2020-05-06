/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
	for(var r = 0;r<nums.length;r++){
		if(nums[r]!=0){
			if(i != r){
				nums[i] = nums[r];
				nums[r] = 0;
			}
			i++;
		}
	}
};

log(moveZeroes([0, 0, 1]));
log(moveZeroes([0, 1, 0, 3, 12]));
