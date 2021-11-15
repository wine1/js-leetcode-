/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s: string): boolean {
  let res: boolean = true
  let que: Array<string> = []
  let len: number = s.length
  if (len < 2 || len % 2 !== 0) {
    return false
  }
  for (let i = 0; i < len; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') que.push(s[i])
    else {
      if (s[i] && que.length) {
        let top = que.pop()
        if (
          (top === '(' && s[i] === ')') ||
          (top === '[' && s[i] === ']') ||
          (top === '{' && s[i] === '}')
        ) {
          continue
        } else {
          return false
        }
      } else {
        res = false
      }
    }
  }
  // 左括号多了的情况
  res = que.length ? false : res
  return res
}

console.log(isValid(''))
console.log(isValid('('))
console.log(isValid('(('))
console.log(isValid('()'))
console.log(isValid('()')) //true
console.log(isValid('()[]{}')) //true
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
