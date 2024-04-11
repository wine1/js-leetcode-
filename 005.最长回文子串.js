/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s
  }
  var s_f = s.split('').reverse().join('')
  var resultStr = s[0]
  var maxLen = 1
  var tmpLen = 1
  var maxStrIndex = 0
  var len = s.length
  //判断字符串是否回文
  function isPalinerome(i, r) {
    if (len - i - 1 == r - tmpLen + 1) {
      return true
    }
    return false
  }
  //初始化二维数组
  var len = s.length
  var arr = new Array(len)
  for (var i = 0; i < len; i++) {
    arr[i] = []
    for (var r = 0; r < len; r++) {
      arr[i][r] = 0
    }
  }
  for (var i = 0; i < len; i++) {
    for (var r = 0; r < len; r++) {
      if (s[i] == s_f[r]) {
        if (i == 0 || r == 0) {
          arr[i][r] = 1
        } else {
          arr[i][r] = arr[i - 1][r - 1] + 1
          tmpLen = arr[i][r]
        }
        if (tmpLen > maxLen && isPalinerome(i, r)) {
          maxStrIndex = r
          maxLen = tmpLen
          resultStr = s.substring(i - tmpLen + 1, i + 1)
        }
      }
    }
  }
  return resultStr
}

/**
 * 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  const isPalinerome = (s, n, left, right) => {
    let str = right - left === 2 ? s[left + 1] : ''
    while (left >= 0 && right <= n) {
      if (s[left] !== s[right]) {
        break
      } else {
        str = s[left] + str + s[right]
      }
      left--
      right++
    }
    return str
  }
  if (len < 2) return s
  let maxLen = 1
  let maxStr = ''
  for (let i = 0; i < len; i++) {
    // 偶数情况
    let str1 = isPalinerome(s, len, i, i + 1)
    // 奇数情况
    let str2 = isPalinerome(s, len, i - 1, i + 1)
    let max = str1.length > str2.length ? str1 : str2
    maxLen = maxLen > max.length ? maxLen : max.length
    maxStr = maxLen > max.length ? maxStr : max
  }
  return maxStr
}
