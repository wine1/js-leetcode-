/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let str = [];
    for (let i = 1; i < n + 1; i++) {
      if (i % 15 === 0) {
        str[i - 1] = "FizzBuzz";
      } else if (i % 3 === 0) {
        str[i - 1] = "Fizz";
      } else if (i % 5 === 0) {
        str[i - 1] = "Buzz";
      } else {
          let temp=i.toString();
        str[i - 1] = temp;
      }
    }
    return str;
  };
// @lc code=end

log(fizzBuzz(15));
