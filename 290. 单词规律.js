/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr1 = pattern.split("");
  let arr2 = str.split(" ");

  let hash1 = [];
  let hash2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (typeof hash1[arr1[i]] !== "undifined"  && typeof hash2[arr2[i]] !== "undifined") {
        
    }
  }

 console.log(arr1, arr2, hash1, hash2);
  return true;
};
// @lc code=end

log(wordPattern("abba", "dog cat cat dog"));
log(wordPattern("abba", "dog cat cat fish"));
log(wordPattern("aaaa", "dog cat cat dog"));
