// https://leetcode-cn.com/problems/grumpy-bookstore-owner/

// customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */

var maxSatisfied = function(customers, grumpy, X) {
    let len=customers.length
    let sum=0,res=0,secret=0
    // 计算不使用秘密技巧时顾客的满意度
    for(let i=0;i<len;i++){
        if(grumpy[i]===0) {
            sum+=customers[i]
        }
    }
    for(let i=0;i<len-X+1;i++) {
        let record=0
        for(let j=0;j<X;j++) {
            if(grumpy[i+j]===1) {
                record+=customers[i+j]
            }
        }
        secret=secret>=record?secret:record
    }
    res=sum+secret
    return res
};


console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1], 3))
console.log(maxSatisfied([8,8],[1,0],2))