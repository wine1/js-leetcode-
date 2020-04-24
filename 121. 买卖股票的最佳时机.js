/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

//  前面跳过了好多二叉树和指针的题，关键是浏览器似乎是无法识别指针，老是报错
//  动态规划该怎么想呢
//  首先是暴力版本
let maxProfit = prices => {
    let min=prices[0];
    let array=[];
    let max=0;
    for(let i=1;i<prices.length;i++) {
        if(min>=prices[i]) {
            array[i]=0;
            min=prices[i];
        }else {
            array[i]=prices[i]-min;
        }
        if(max>array[i]) {
            continue;
        }else {
            max=array[i];
        }
    }
    return max;
};
// @lc code=end

log(maxProfit([7, 1, 5, 3, 6, 4]));
// 5
log(maxProfit([7, 6, 4, 3, 1]));
// 0
