/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = parseInt(s.length / 2);
  let temp;
  for (let i = 0; i < len; i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
  return s;
};
// @lc code=end

log(reverseString(["h", "e", "l", "l", "o"]));
log(reverseString(["H", "a", "n", "n", "a", "h"]));
