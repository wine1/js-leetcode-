/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = new Array(); //结果集
    let curArr = new Array(); //当前结果
    recursion(candidates, 0, curArr, target, result);
    return result;
  };
  
  let recursion = function(arr, index, curArr, currentTarget, result) {
    if (currentTarget < 0) {
      return;
    }
    for (let i = index; i < arr.length; i++) {
      let x = arr[i];
      curArr.push(x);
      if (x > currentTarget) {
        curArr.pop();
        return;
      } else if (currentTarget == x) {
        result.push([].concat(curArr));
      } else {
        // console.log(i, curArr, currentTarget - x, result);
        recursion(arr, i, curArr, currentTarget - x, result);
      }
      curArr.pop();
    }
  };

  console.log(combinationSum([2, 3, 6, 7], 7));
  console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
  