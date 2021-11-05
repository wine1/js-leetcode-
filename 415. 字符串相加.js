// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

// 示例 1：

// 输入：num1 = "11", num2 = "123"
// 输出："134"
// 示例 2：

// 输入：num1 = "456", num2 = "77"
// 输出："533"
// 示例 3：

// 输入：num1 = "0", num2 = "0"
// 输出："0"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let arr1 = num1.split('').reverse()
  let arr2 = num2.split('').reverse()
  let len = arr1.length > arr2.length ? arr1.length : arr2.length
  let res = ''
  let carry = 0
  for (let i = 0; i < len; i++) {
    let sum = 0
    let remainder = 0
    arr1[i] = parseInt(arr1[i]) ? parseInt(arr1[i]) : 0
    arr2[i] = parseInt(arr2[i]) ? parseInt(arr2[i]) : 0
    sum = arr1[i] + arr2[i]
    // console.log(arr1[i], arr2[i], sum)
    sum = carry ? sum + 1 : sum
    remainder = sum % 10
    res = remainder + res
    carry = sum > 9 ? 1 : 0
  }
  res = carry ? 1 + res : res
  return res
}

console.log(addStrings('11', '123')) // 134
console.log(addStrings('456', '77')) // 533
console.log(addStrings('0', '0')) // 0
console.log(addStrings('9', '1')) // 0
