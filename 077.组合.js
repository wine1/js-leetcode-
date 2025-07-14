/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res=[]
    // const path=[]

    const backTracing=(start,k,arr)=>{
        if(arr.length=== k) {
            res.push([...arr])
            return
        }
        for(let i=start;i<= n - (k - arr.length) + 1;i++) {
            arr.push(i)
            backTracing(i+1,k,[...arr])
            arr.pop()
        }
    }

    backTracing(1,k,[])
    return res
};
// @lc code=end
console.log(combine(4,2)) // [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4],]
console.log(combine(1,1)) //[[1]]
console.log(1111)
