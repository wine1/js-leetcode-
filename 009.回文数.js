/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0|| x%10===0) {
      if(x===0) {
          return true;
      }else {
          return false;
      }
  }else if(x<10) {
      return true;
  }
  else {
      let str=x.toString();
      let arr=str.split('');
      // console.log(str.length)
      for(let i=0;i<arr.length/2;i++) {
          // console.log(arr[i])
          if(arr[i]!==arr[arr.length-i-1]) {
              return false;
          }
      }
  }
  return true;
};
// @lc code=end
console.log(isPalindrome(1221))
console.log(isPalindrome(0))
console.log(isPalindrome(23456))


