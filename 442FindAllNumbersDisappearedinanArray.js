/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let len=nums.length;
    let hash=[len];
    let arr=[len];
    let j=0;
    if(len===0|| len===1) {
        arr=[];
    }
    for(let i=0;i<len;i++) {
       if(typeof hash[nums[i]] === 'undefined') {
           hash[nums[i]]=i;
       }else {
           arr[j++]=nums[i];
       }
    }
    return arr;
};
// @lc code=end

log(findDisappearedNumbers([]));
log(findDisappearedNumbers([1]));
log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));