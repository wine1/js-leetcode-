/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 用栈来写 思路有了 到底咋写 知道咋写了 就是不想写 懒
var isValid = function(s) {
  var arr = s.split("");
  var stack = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      if (stack.isEmpty()) {
        log("false");
        return false;
      }
    }
  }
  log("true");
  return true;
};
isValid("()[]{}");
isValid("([)]");
