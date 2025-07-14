/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res=[]

    const backTracing=(start,arr,sum)=>{
        if(arr.length === k) {
            if(sum===n)
                res.push([...arr])
            return
        }
        for(let i=start;i<=9;i++) {
            if(sum+i>n) break
            arr.push(i)
            backTracing(i+1,arr,sum+i)
            arr.pop()
        }
    }

    backTracing(1,[],0)
    return res
};
// @lc code=end

console.log(combinationSum3(3,7)) // [[1,2,4]]
console.log(combinationSum3(3,9)) // [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4,1)) // []
console.log(1111)
