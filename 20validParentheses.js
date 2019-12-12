/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let arr = s.split("");
  if ((s === " " || s.length===0)) {
    return true;
  } else if (arr.length < 2) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      continue;
    } else if (arr[i] === "{" || arr[i] === "[" || arr[i] === "(") {
      stack.push(arr[i]);
      //   console.log(arr[i])
    } else {
      let temp = stack[stack.length - 1];
      //   console.log("top", temp,arr[i]);
      if (
        (temp === "(" && arr[i] === ")") ||
        (temp === "[" && arr[i] === "]") ||
        (temp === "{" && arr[i] === "}")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if(stack.length===0) {
    return true;
  }else {
      return false;
  }
};

console.log(isValid(" "));
console.log(isValid("("));
console.log(isValid("(("));
console.log(isValid("()"));
console.log(isValid("( )")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
