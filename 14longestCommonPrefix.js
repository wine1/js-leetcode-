/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = strs => {
    let len=[];
    let min=0;
  for(let i=0;i<strs.length;i++) {
    len[i]=strs[i].length;
    if(min>len[i]) {
        min=len[i];
    }
  }
  log(min);
};

log(longestCommonPrefix(["flower", "flow", "flight"]));
log(longestCommonPrefix(["dog", "racecar", "car"]));
