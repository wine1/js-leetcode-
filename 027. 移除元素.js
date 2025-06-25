/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//  直接用js的封装方法好像取巧了些许，用js刷完再用java刷一遍吧~
var removeElement = function(nums, val) {
    for(var i=0;i<nums.length;i++) {
        if(nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
    var len=nums.length;
    return len;
};


var removeElement2 = function(nums, val) {
    let first=0
    let last=nums.length
    while(first < last) {
        if(nums[first] === val) {
            nums[first]=nums[last-1]
            last--
        }else {
            first++
        }
    }
    return last
};

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));