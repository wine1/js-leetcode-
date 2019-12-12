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




/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let res = -1,
    len1 = haystack.length,
    len2 = needle.length;
  if (needle.length === 0 || needle === " ") {
    return 0;
  } else if (len1 < len2) {
    return -1;
  } else {
    for (let i = 0; i < len1; i++) {
      if (haystack[i] === needle[0]) {
        res = i;
        for (let j = 0; j < len2; j++) {
          if (haystack[i + j] !== needle[j]) {
            res = -1;
            break;
          }
        }
        if (res !== -1) {
          return res;
        }
      }
    }
    return res;
  }
};

// strStr("hello", "ll");
// strStr("aaaaa", "bba");
strStr("mississippi", "issip");
// @lc code=end

log(strStr('hello','ll'));
log(strStr('aaaaa','bba'));