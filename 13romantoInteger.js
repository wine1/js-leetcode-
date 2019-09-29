/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */

// 从罗马数字的组合规律可以知道，如果某个数字比它右边数字小，两者组合的数字是右边数字减左边数字，如果比右边数字大，两者组合是右边数字加左边数字。
var romanToInt = function(s) {
  var arr = s.split("");
  var num = 0;
  for (var i = 0; i < arr.length; ++i) {
    // 在js中，数组的长度是动态的，换言之就是可以随意向数组中添加值，但没有赋值的情况下默认值是undefined,因此如果少了下面这一步判断，最后一位就会进入到减法中
    if (arr[i + 1] != undefined) {
      if (getVal(arr[i]) < getVal(arr[i + 1])) {
        num -= getVal(arr[i]);
        num = Math.abs(num);
      } else {
        num += getVal(arr[i]);
        num = Math.abs(num);
      }
    } else {
      num += getVal(arr[i]);
      num = Math.abs(num);
    }
  }
  log(num);
};
var getVal = function(ch) {
  switch (ch) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    default:
      return 1000;
  }
};
romanToInt("III");
romanToInt("IX");
romanToInt("LVIII");
romanToInt("MCMXCIV");
