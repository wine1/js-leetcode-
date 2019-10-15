// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     313311
// 7.     13112321

/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

//  暴力来做可以 但是好像没必要

// 很明显可以用递归 归~
// 我总觉得我的思路没有错，是js的错，js实现不了 晚上回去用java写写看吧

// let countAndSay = n => {
//   let count = 1,
//     num;
//   var str = "";
//   if (n === 1) {
//     str = '1';
//     return str;
//   } else {
//     let str2 = countAndSay(n - 1);
//     log(str2);
//     let str3=str2.toString();
//     log(str3);
//     let arr = str3.split("");
//     log(arr);
//     for (let i = 0; i < arr.length; i++) {
//       num = arr[i];
//       if (arr[i] === arr[i + 1]) {
//         count++;
//       } else {
//         str = str + count + num;
//         num = 1;
//       }
//     }
//   }
// };

// 那就暴力写吧，要有多暴力，就有多暴力
let countAndSay = n => {
  let count = 1,
    num;
  let arr = [];
  if (n === 1) {
    str = "1";
  } else {
    for (let i = 1; i < n; i++) {
      arr = str.split("");
      let str2='';
      for (let j = 0; j < arr.length; j++) {
        num = arr[j];
        if (arr[j] === arr[j + 1]) {
          count++;
          continue;
        } else {
            log(count,num);
          str2 = str2 + count + num;
          count = 1;
        }
      }
      str=str2;
    }
  }
  return str;
};
log(countAndSay(1));
log(countAndSay(2));
log(countAndSay(3));
log(countAndSay(4));
log(countAndSay(7));
// @lc code=end
