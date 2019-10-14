/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string} 
 */

//  js中的隐式转换很磨人
var addBinary = function(a, b) {
  var arr1 = a.split("");
  var arr2 = b.split("");
  arr1.reverse();
  arr2.reverse();
  var arr3=[];
  var carry = 0;
  var n = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (var i = 0; i < n+1; i++) {
    if (arr1[i] === undefined) {
      arr1[i] = 0;
    } else if (arr2[i] === undefined) {
      arr2[i] = 0;
    }
    // log(arr1[i], arr2[i],parseInt(arr1[i]) + parseInt(arr2[i]) + carry);
    if (parseInt(arr1[i]) + parseInt(arr2[i]) + carry === 0) {
      carry = 0;
      arr3[i]=0;
    } else if (parseInt(arr1[i]) + parseInt(arr2[i]) + carry === 1) {
      carry = 0;
     arr3[i]=1;
    } else if (parseInt(arr1[i]) + parseInt(arr2[i]) + carry === 2) {
      carry = 1;
      arr3[i]=0;
    } else {
      carry = 1;
      arr3[i]=1;
    }
  }
  arr3.reverse();
  var c=arr3.join('');
  str=c.toString();
  return str;
};
// @lc code=end

log(addBinary("11", "1"));
log(addBinary("1010", "1011"));
