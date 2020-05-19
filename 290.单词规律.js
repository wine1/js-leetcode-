/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true

// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false


// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr1 = pattern.split("");
    let arr2 = str.split(" ");
  //   console.log(arr1, arr2);
    let len1 = arr1.length;
    let len2 = arr2.length;
    if (len1 !== len2) {
      return false;
    }
    for (let i = 0; i < len1; i++) {
      // let temp1, temp2;
      temp1 = arr1.indexOf(arr1[i], i + 1);
      temp2 = arr2.indexOf(arr2[i], i + 1);
      // console.log(temp1, temp2);
      if (temp1 !== temp2) {
        return false;
      }
    }
    return true;
  };
  // @lc code=end
  
  console.log(wordPattern("abba", "dog cat cat fish"));
  console.log(wordPattern("abba", "dog cat cat dog"));
  console.log(wordPattern("aaaa", "dog cat cat dog"));
  