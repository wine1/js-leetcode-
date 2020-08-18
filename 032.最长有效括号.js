/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//  压栈来匹配 左括号入栈
var longestValidParentheses = function(s) {
    let maxLength = 0;
    let len = 0;
    const stack = [-1];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(") {
        stack.push(i);
        continue
      }
      stack.pop()
      if (stack.length) {
        len = i - stack[stack.length - 1];
        maxLength = maxLength > len ? maxLength : len;
      } else {
        stack.push(i);
      }
      // console.log(stack, len, maxLength);
    }
  
    return maxLength;
  };
  // @lc code=end
//   console.log(longestValidParentheses("(()")); //2
//   console.log(longestValidParentheses(")()())")); //4
//   console.log(longestValidParentheses("()(()")); //2
  