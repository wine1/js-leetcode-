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
let countAndSay = n => {
  let count = 1,
    num;
  var str = "";
  if (n === 1) {
    str = "1";
    return str;
  } else {
    let str2 = countAndSay(n - 1);
    // console.log("str2", str2);
    let str3 = str2.toString();
    // console.log("str3", str3);
    let arr = str3.split("");
    // console.log("arr", arr);
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (arr[i] === arr[i + 1]) {
        count++;
      } else {
        str = str + count + num;
        count = 1;
      }
    }
  }
  return str;
};


// 那就暴力写吧，要有多暴力，就有多暴力
// 返回值的位置错了导致多重循环然后结果出错。。。打了许多断点才找到问题
// debug能过 但是在页面的编辑器里会报错  submit的结果也是错的
let countAndSay = n => {
  let count = 1,
    num;
  let arr = [];
  let str,
    str1 = n.toString();
  if (n === 1) {
    return (str = "1");
  } else {
    for (let i = 1; i < n; i++) {
      arr = str1.split("");
      let str2 = "";
      for (let j = 0; j < arr.length; j++) {
        num = arr[j];
        if (arr[j] === arr[j + 1]) {
          count++;
          continue;
        } else {
         console.log(count, num);
          str2 = str2 + count + num;
          //console.log("show"+str2,count,num);
          count = 1;
        }
      }
      str = str2;
      //console.log("str",str,i);
      return str;
    }
  }
};

// 网抄大神解法
var countAndSay = function(n) {
  let prev = "1";
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
  }
  return prev;
};
log(countAndSay(1));
log(countAndSay(2));
log(countAndSay(3));
log(countAndSay(4));
//  console.log(countAndSay(7));
// @lc code=end
