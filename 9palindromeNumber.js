/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  // 负数的第一位带有负号'-'，所以一定不是回文数
  // 长度超过一位的数字，第一位肯定不是 0，因此末尾是 0，则一定不是回文数
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  var revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + parseInt(x % 10);
    x = parseInt(x/10);
  }
  log(revertedNumber,x);
  return x == revertedNumber || x == revertedNumber / 10;
};
log(isPalindrome(12021));
log(isPalindrome(-1221));
