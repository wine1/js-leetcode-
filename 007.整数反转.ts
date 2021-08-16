/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let res: number, temp: number | string | Array<any>, isNegative: boolean = false
    if (x === 0) {
        return 0
    } else if (x < 0) {
        temp = Math.abs(x)
        isNegative = true
    } else {
        temp = x
    }
    temp = temp.toString().split('').reverse()
    temp = temp.join('')
    temp = parseInt(temp)
    res = isNegative ? temp - temp * 2 : temp
    if(res<Math.pow(2,31) && res>Math.pow(-2,31)-1) {
    return res
    }else {
        return 0
    }
};
// @lc code=end

