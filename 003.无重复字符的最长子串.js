/**
 * @param {string} s
 * @return {number}
 */

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

// 解题思路：
// 遍历字符串,

// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  let str = s[0]
  let len = s.length
  let maxlen = 1
  let res = 1
  if (len === 0) {
    return 0
  }
  for (let i = 1; i < len; i++) {
    if (str.indexOf(s[i]) == -1) {
      str += s[i]
      maxlen++
    } else {
      let temp = str.indexOf(s[i]) + 1
      str = str.substr(temp)
      str += s[i]
      maxlen = str.length
      // console.log(temp, str);
    }
    res = res > maxlen ? res : maxlen
    // console.log("str", str, "maxlen", maxlen);
  }
  return res
}


var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1
  let res = 0
  let str = s[0]
  for (let i = 1; i < s.length; i++) {
    let index = str.indexOf(s[i])
    str += s[i]
    if (index !== -1) {
      str = str.slice(index + 1)
    }
    res = res > str.length ? res : str.length
  }
  return res
};
// 最新方案 hash一次遍历 把最小字串打出来了
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0
  let resHash = new Map()
  let maxLenght = 1
  let maxIndex = 0
  let str = s[0]
  resHash.set(0, s[0])
  for (let i = 1; i < s.length; i++) {
    let index = str.indexOf(s[i])
    if (index !== -1) {
      str = str.slice(index + 1)
    }
    str += s[i]
    resHash.set(i, str)
    maxIndex = maxLenght >= str.length ? maxIndex : i
    maxLenght = maxLenght >= str.length ? maxLenght : str.length
  }
  return maxLenght
}


console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb')) //abc
console.log(lengthOfLongestSubstring('bbbbb')) //b
console.log(lengthOfLongestSubstring('pwwkew')) //kew
console.log(lengthOfLongestSubstring('aabaab!bb'))
console.log(lengthOfLongestSubstring(''))
