/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

 //  每次都容易忽视边界 极限 之类的问题
//  执行用时 :
//  108 ms
//  , 在所有 javascript 提交中击败了
//  61.39%
//  的用户
//  内存消耗 :
//  36.7 MB
//  , 在所有 javascript 提交中击败了
//  10.96%
//  的用户

// 可以优化很多 比如用二分查找 暂时犯懒不想写

 var arrangeCoins = function(n) {
  if (n === 0) {
    return 0;
  } 
  else if (n === 1) {
    return 1;
  } 
  else {
    for (let i = 1; i < n+1; i++) {
      let s = (i * i + i) / 2;
      if (s > n) {
        return i - 1;
      }
    }
  }
};

log(arrangeCoins(1));
log(arrangeCoins(2));
log(arrangeCoins(5));
log(arrangeCoins(8));
log(arrangeCoins(10));

// @lc code=end
