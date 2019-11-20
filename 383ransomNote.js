/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let arr1 = ransomNote.split("");
  let arr2 = magazine.split("");
  let hash1 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (typeof hash1[magazine[i]] === "undefined") {
      hash1[magazine[i]] = 1;
    } else {
      let count = hash1[magazine[i]];
      count++;
      hash1[magazine[i]] = count;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof hash1[ransomNote[i]] === "undefined") {
      return false;
    } else {
      let count = hash1[ransomNote[i]];
      count--;
      hash1[ransomNote[i]] = count;
      if(count<0) {
          return false;
      }
    }
  }
  return true;
};
// @lc code=end
log(canConstruct("a", "b")); //-> false
log(canConstruct("aa", "ab")); //-> false
log(canConstruct("aa", "aab")); //-> true
