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
