/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let sortArr = candidates.sort((a, b) => a - b);
    let result = new Array();
    let curArr = new Array();

    recursion(sortArr, 0, target, curArr, result);

    return result;
};

let recursion = function (sortArr, index, currentTarget, curArr, result) {
    if (currentTarget < 0) {
        return;
    }
    for (let i = index; i < sortArr.length; i++) {
        if (sortArr[i] == sortArr[i - 1] && i>index) {
            continue
        }
        let x = sortArr[i];
        curArr.push(x);
        if (currentTarget < x) {
            curArr.pop();
            return;
        } else if (currentTarget == x) {
            result.push([].concat(curArr));
        } else {
            // console.log(i + 1, currentTarget - x, curArr, result)
            recursion(sortArr, i + 1, currentTarget - x, curArr, result);
        }

        curArr.pop();
    }
};
// @lc code=end
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));