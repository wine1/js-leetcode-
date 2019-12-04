/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(" ");
  let n = 0;
  if (s.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      n++;
    }
  }
  return n;
};
// @lc code=end

log(countSegments("Hello, my name is John")); //5
log(countSegments("       ")); //8
log(countSegments("Of all the gin joints in all the towns in all the world,   ")
); //13
