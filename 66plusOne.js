/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 这题看懂题目了就会做了，关键是要看懂题目呀

// 先上一个简单粗暴的,js的各种类型转换真的很神奇
// array.map(number)将字符串数组转换成 number类型的数组这个方法很实用~
// let plusOne = digits => {
//   let str1 = digits.join("");
//   let str2 = str1.toString();
//   log(digits, str2);
//   let num = parseInt(str2);
//   num = num + 1;
//   let str3 = num.toString();
//   let arr = str3.split("");
//   return arr.map(Number);
// };

// js好用~
let plusOne = digits => {
  let n = digits.length;
  for (let i = n - 1; i > -1; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  return digits;
};
// @lc code=end

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 2, 9]));
