/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = strs => {
  let comstr = "";
  let len = strs.length;
  if (len === 0) {
    return "";
  }else if(len===1) {
    comstr=strs[0];
  }
  let min = strs[0].length;
  for (let i = 0; i < len - 1; i++) {
    if (strs[i].length < min) {
      min = strs[i].length;
    }
  }
  let com = "";
  for (let j = 0; j < min; j++) {
    for (let i = 0; i < len - 1; i++) {
      console.log(strs[i].charAt(j), strs[i + 1].charAt(j));
      if (strs[i].charAt(j) !== strs[i + 1].charAt(j)) {
        console.log("res", comstr);
        return comstr;
      } else {
        com = strs[i].charAt(j);
      }
    }
    comstr += com;
  }
  console.log("res", comstr);
  return comstr;
};

// 注意测试用例的覆盖率
longestCommonPrefix([]);
longestCommonPrefix(["aaawra"]);
longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
// @lc code=end
