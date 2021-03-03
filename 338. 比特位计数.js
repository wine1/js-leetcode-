// https://leetcode-cn.com/problems/counting-bits/
// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

// 示例 1:

// 输入: 2
// 输出: [0,1,1]
// 示例 2:

// 输入: 5
// 输出: [0,1,1,2,1,2]
/**
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
    let resArr = new Array(num + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= num; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        resArr[i] = resArr[i - highBit] + 1;
    }
    return resArr
};

console.log(countBits(2))
console.log(countBits(5))