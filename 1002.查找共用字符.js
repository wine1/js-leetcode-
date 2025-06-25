/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < words.length; i++) {
    let temp = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      if (i === 0) {
        arr[words[i][j].charCodeAt() - 97]++;
      }else {
        temp[words[i][j].charCodeAt() - 97]++;
      }
    }
    for(let j=0;j<26;j++) {
        if(i===0) break
      if(temp[j]<arr[j]) {
        arr[j] = temp[j];
      }
    }
  }
  let res = [];
  for(let i=0;i<26;i++) {
    while(arr[i]>0) {
      res.push(String.fromCharCode(i+97));
      arr[i]--;
    }
  }
  return res;
};

console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]

// @lc code=end
