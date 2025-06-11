// https://leetcode-cn.com/problems/merge-intervals/
// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:

// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:

// 输入: intervals = [[1,4],[4,5]]
// 输出: [[1,5]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) { // 有重合
      prev[1] = Math.max(cur[1], prev[1]); 
    } else {       // 不重合，prev推入res数组 
      res.push(prev);
      prev = cur;  // 更新 prev
    }
  }

  res.push(prev);
  return res;

};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))



var merge = function(intervals) {
    // 根据区间前面的数字进行排序
    intervals.sort((a,b)=>a[0]-b[0])
    console.log(intervals);
    let result = []
    result.push(intervals[0])
    for(let i=1;i<intervals.length;i++){
        let resultLen=result.length
        let prev=result[resultLen-1][1]
        let curr=intervals[i][0]
        if(prev>=curr){
            result[resultLen-1]=[result[resultLen-1][0],Math.max(prev,intervals[i][1])]
        }else {
            result.push(intervals[i])
        }
    }
    return result
};
// @lc code=end

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,4]]))
console.log(merge([[1,4],[2,3]]))