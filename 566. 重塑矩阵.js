// https://leetcode-cn.com/problems/reshape-the-matrix/
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let res = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let m=nums.length
    let n=nums[0].length
    let temp=new Array
    let index=0
    if(n*m!==r*c) {
        return nums
    }else {
        for(let i=0;i<m;i++) {
            for(let j=0;j<n;j++) {
                temp.push(nums[i][j])
            }
        }
        for(let i=0;i<r;i++) {
            for(let j=0;j<c;j++) {
               res[i][j]=temp[index++]
            }
        }
        return res
    }
};