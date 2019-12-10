/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//  设定一个标准值last 当i<last时 res-=i  当i>last时 last=i res+=i
var romanToInt = function(s) {
  const getVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var arr = s.split("");
  var num = 0,
    lastN = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    let n = arr[i];
    n = getVal[n];
    n >= lastN ? (num +=n, lastN = n) : num -= n
    // if(lastN>n) {
    //     num-=n;
    // }else {
    //     num+=n;
    //     lastN=n;
    // }
    console.log(num,lastN)
  }
  console.log(num);
  return num;
};


romanToInt("III"); //3
romanToInt("IX"); //9
romanToInt("LVIII"); //58
romanToInt("MCMXCIV"); //1994
// @lc code=end
