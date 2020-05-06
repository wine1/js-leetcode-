/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n !== 1) {
    if (n <= 0) {
      return false;
    } else {
      if (n % 3 !== 0) {
        return false;
      } else if (n % 3 === 0) {
        n = n / 3;
      }
    }
  }
  return true;
};
// @lc code=end


// 网上抄来的神奇的二进制解法
// let isPowerOfThree=(n)=> {
//     return /^10*$/.test(n.toString(3));
// }


log(isPowerOfThree(27));
log(isPowerOfThree(0));
log(isPowerOfThree(9));
log(isPowerOfThree(45));