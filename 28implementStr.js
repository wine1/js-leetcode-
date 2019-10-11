/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 数组字符串类的题目好像做起来都轻松很多
var strStr = function(haystack, needle) {
  var arr1 = haystack.split("");
  var arr2 = needle.split("");
  var number = -1;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[0]) {
      number = i;
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i++] === arr2[j++]) {
          continue;
        } else {
          number = -1;
        }
      }
    }
  }
  return number;
};
log(strStr('hello','ll'));
log(strStr('aaaaa','bba'));