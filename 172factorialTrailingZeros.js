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
var trailingZeroes = function(n) {
    let res=1;
    for(let i=1;i<n+1;i++) {
        res=res*i;
    }
    res.
};
// @lc code=end

log(trailingZeroes(3));
log(trailingZeroes(5));