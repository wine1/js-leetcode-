/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//  暴力破解
// 这道题的这种暴力解法行不通，因为数字会变得很大比如n=30时结果为2.6525285981219103e+32 尾数中0的个数不符合预期
// var trailingZeroes = function (n) {
//     let res = 1;
//     for (let i = 1; i < n + 1; i++) {
//         res = res * i;
//     }
//     let str = res.toString();
//     let arr = str.split('');
//     let count = 0;
//     log(str);
//     for (let i = arr.length-1; i>0; i--) {
//         if (arr[i] == 0) {
//             count++;
//         }else {
//             break;
//         }
//     }
//     return count;
// };


// 分解因子 乘项可以分解成多少个带有5和2和超过个位数的尾数0
let trailingZeroes = n => {
    let count=0;
    for(let i=1;i<n+1;i++) {
        // let two=parsent(i%2);
        let five=i%5;
        let zero=i%10;
        log(i,five,zero);

        if(five===0&&zero!==0){
            count++;
        }else if(zero===0){
            let str=i.toString();
            let m=str.length-1;
            count+=m;
        }

        // if(five===0 || zero===0) {
        //     if(zero===0) {
        //         let str=i.toString();
        //         let m=str.length-1;
        //         count+=m;
        //     }else {
        //         count++;
        //     }
        // }else {
        //     continue;
        // }
    }
    return count;
}
// @lc code=end

log(trailingZeroes(3));
log(trailingZeroes(5));
log(trailingZeroes(10));
log(trailingZeroes(30));