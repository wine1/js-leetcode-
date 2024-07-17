/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 暴力方法在极端用例下会超时
// var findAnagrams = function (s, p) {
//   let res = []
//   let m = s.length
//   let n = p.length
//   if (m < n) return []
//   for (let i = 0; i < m - n + 1; i++) {
//     let temp = p.split('')
//     for (let j = i; j < i + n + 1; j++) {
//       let index = temp.indexOf(s[j])
//       if (index !== -1) {
//         temp.splice(index, 1)
//       } else {
//         break
//       }
//     }
//     if (temp.length === 0) {
//       res.push(i)
//     }
//   }
//   return res
// };

// 滑动窗口
var findAnagrams = function (s, p) {
  let res = []
  let m = s.length
  let n = p.length
  if (m < n) return []
  let arrp = new Array(26).fill(0)
  let arrs = new Array(26).fill(0)
  for (let i = 0; i < n; i++) {
    ++arrp[p[i].charCodeAt() - 'a'.charCodeAt()]
    ++arrs[s[i].charCodeAt() - 'a'.charCodeAt()]
  }
  if (arrp.toString() === arrs.toString()) {
    res.push(0)
  }
  for (let i = 0; i < m - n; i++) {
    --arrs[s[i].charCodeAt() - 'a'.charCodeAt()]
    ++arrs[s[i + n].charCodeAt() - 'a'.charCodeAt()]
    if (arrp.toString() === arrs.toString()) {
      res.push(i + 1)
    }
  }
  return res
};

console.log('res', findAnagrams("cbaebabacd", "abc"))