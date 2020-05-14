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
var findSubstring = function(s, words) {
    let hashex = {};
    let len = 0;
    let count = words[0].length;
    let res = [];
    for (let i = 0; i < words.length; i++) {
      if (typeof hashex[words[i]] == "undefined") {
        hashex[words[i]] = 0;
        len += words[i].length;
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
        //   console.log("testStr", testStr, "temp", temp);
        if (typeof temp[testStr] !== "undefined") {
          // console.log("temp", temp);
          delete temp[testStr];
        } else {
          continue;
        }
  
      //   console.log("temp", testStr, temp, i);
        if ( JSON.stringify(temp)=='{}') {
            console.log(true)
          flag = true;
        }
      }
      if (flag) {
        res.push(i);
        i = i + len;
      }
    }
    //   console.log(hashex, len, str, count);
    return res;
  };
  // @lc code=end
  
  console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
  console.log(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
  );
  