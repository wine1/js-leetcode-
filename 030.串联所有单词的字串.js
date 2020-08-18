/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

  // 目前的代码应该可以简化 暂时就先这样吧
var findSubstring = function(s, words) {
  if(!s.length ||!words.length) return []
  let hashex = {};
  let count = words[0].length;
  let len = words.length * count;
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (typeof hashex[words[i]] == "undefined") {
      hashex[words[i]] = 0;
    } else {
      hashex[words[i]] = hashex[words[i]] + 1;
    }
  }
  if (len > s.length) {
    return [];
  }
  let str;

  for (let i = 0; i < s.length - len + 1; i++) {
    let flag = false;
    str = s.substr(i, len);
    let temp = Object.assign({}, hashex);
    for (let j = 0; j < len / count; j++) {
      let testStr = str.substr(j * count, count);
      if (typeof temp[testStr] !== "undefined") {
        if (temp[testStr] == 0) {
          delete temp[testStr];
        } else {
          temp[testStr]--;
        }
      }else {
        break
      }

      if (JSON.stringify(temp) == "{}") {
        flag = true;
      }
    }
    if (flag) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end

// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
// );