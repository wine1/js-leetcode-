/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 在leetcode中超时 需要优化一个hasT的思路
var minWindow = function (s, t) {
  let res = ''
  const hasT = (str) => {
    let copy = t
    for (let i = 0; i < str.length; i++) {
      let index = copy.indexOf(str[i])
      if (index !== -1) {
        copy = copy.substring(0, index) + copy.substring(index + 1, copy.length)
      }
      // console.log(!copy.length, index, copy)
    }
    return !copy.length
  }

  let fast = 1, slow = 0
  while (fast >= slow && fast <= s.length) {
    let str = s.substring(slow, fast)
    // console.log('str', str, hasT(str), fast, slow)
    if (hasT(str)) {
      res = res.length && res.length < str.length ? res : str
      slow++
    } else {
      fast++
    }
  }
  return res
};

console.log(minWindow("ADOBECODEBANC", "ABC"))