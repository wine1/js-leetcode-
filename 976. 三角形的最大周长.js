// https://leetcode-cn.com/problems/largest-perimeter-triangle/
// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

// 如果不能形成任何面积不为零的三角形，返回 0。

/**
 * @param {number[]} A
 * @return {number}
 */

// 1. 数组中不存在两数之和大于第三个数时，结果为0
// 2. 在两数之和大于第三个数的组合中取最大值
// 先排序 

var largestPerimeter = function(A) {
    let res=0
    A.sort((a,b)=>{return a-b})
    for(let i=A.length-1;i>1;i--) {
        if(A[i]<A[i-1]+A[i-2]) {
            let sum=A[i-2]+A[i-1]+A[i]
            res=res>sum?res:sum
            return res
        }else {
            res=0
        }
    }
    return res
};

console.log(largestPerimeter([1,4,18,3,8,4,4]))