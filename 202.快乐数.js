/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

// 如果 n 是快乐数就返回 True ；不是，则返回 False 。

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let hash = {};
  while (n !== 1) {
    let arr = [];
    let sum = 0;
    arr = n.toString().split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i];
    }
    console.log("sum", sum);

    if (typeof hash[sum] !== "undefined") {
      return false;
    } else {
      hash[sum] = 0;
    }
    console.log("hash", hash);
    n = sum;
  }
  return true;
};
// @lc code=end

console.log(isHappy(19));//true
console.log(isHappy(7)); //true
console.log(isHappy(2)); //false
console.log(isHappy(1));//true
