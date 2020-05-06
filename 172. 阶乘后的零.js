/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//  暴力破解
// 这道题的这种暴力解法行不通，因为数字会变得很大比如n=30时结果为2.6525285981219103e+32 尾数中0的个数不符合预期 而且时间复杂度超了
// var trailingZeroes = function (n) {
//     let res = 1;
//     for (let i = 1; i < n + 1; i++) {
//         res = res * i;
//     }
//     let str = res.toString();
//     let arr = str.split('');
//     let count = 0;
//    console.log(str);
//     for (let i = arr.length-1; i>0; i--) {
//         if (arr[i] == 0) {
//             count++;
//         }else {
//             break;
//         }
//     }
//     return count;
// };

// 分解因子 乘项可以分解成多少个带有5的
let trailingZeroes = n => {
  let count = 0;
  let i=5;
  while (i<=n) {
    

  }

  return count;
};
// @lc code=end

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(10));
console.log(trailingZeroes(30));
