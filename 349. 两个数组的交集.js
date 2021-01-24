/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let hash1 = [];
  let arr = [];
  let n = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (typeof hash1[nums1[i]] === "undefined") {
      hash1[nums1[i]] = true;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (typeof hash1[nums2[i]] !== "undefined") {
      if (arr.indexOf(nums2[i]) != -1) {
        continue;
      } else {
        arr[n++] = nums2[i];
      }
    }
  }
  return arr;
};


// 利用哈希集合值唯一的特性。

// var intersection = function(nums1, nums2) {
//     let hash1 = new Set(nums1)
//     let hash2 = new Set()

//     for(let i = 0; i < nums2.length; i++) {
//         if(hash1.has(nums2[i])){
//             hash2.add(nums2[i])
//         }
//     }
//     return [...hash2]
// };

// @lc code=end

console.log(intersection([1, 2, 2, 1], [2, 2])); //2
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //9,4
