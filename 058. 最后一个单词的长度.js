/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//  需要排除末尾有空格的情况
var lengthOfLastWord = function(s) {
  var arr = s.split("");
//   console.log(arr);
  var count = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === " ") {
      if (count === 0) {
        continue;
      } else {
        break;
      }
    } else {
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("Hello World "));
