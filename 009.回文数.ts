/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let res: boolean = false
  // arr 是x转成字符串有分割开的数组 如 120 转成['1','2','0']
  let Arr = x.toString().split('')
  // len是这个数组的长度 后面要用
  let len: number = Arr.length
  // x小于0 是负数 一定不是回文
  if (x < 0) {
    res = false
  } else if (x < 10) {
    // 一位数 根据规则 是回文
    res = true
  } else if (x % 10 === 0) {
    // 最后一位是0 数字不会出现 010 这种形式 所以不是回文
    res = false
  } else {
    // for循环 对半拆分 头跟尾比 比如 12321 循环只需要到中间的数就可以全部对比完了
    for (let i = 0; i < Math.ceil(len / 2); i++) {
      // 相等 res为true 循环结束res依旧为true说明是回文
      if (Arr[i] === Arr[len - 1 - i]) {
        res = true
      } else {
        // 只要对比的过程中不相等了 就不是回文数了 break跳出循环
        res = false
        break
      }
    }
  }
  return res
}
// @lc code=end
