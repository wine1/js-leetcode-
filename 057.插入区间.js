/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []
    const len = intervals.length

    if(len === 0) return [newInterval]

    // 插入新区间到合适位置
    let inserted = false
    for(let i = 0; i < len; i++) {
        if(!inserted && intervals[i][0] >= newInterval[0]) {
            intervals.splice(i, 0, newInterval)
            inserted = true
            break
        }
    }
    if (!inserted) intervals.push(newInterval)
    // 合并区间
    let prev = intervals[0]
    for(let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        if(cur[0] > prev[1]) {
            result.push(prev)
            prev = cur
        } else {
            prev[1] = Math.max(prev[1], cur[1])
        }
    }
    result.push(prev)
    return result
};
// @lc code=end
console.log(insert([[1,3],[6,9]],[2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
console.log(insert([], [5,7]))
console.log(insert([[1,5]], [2,3]))
console.log(insert([[1,5]], [2,7]))
console.log(insert([[1,5]], [6,8]))
console.log(insert([[3,5],[12,15]], [6,6]))
console.log(111)
