/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  var arr = [];
  var ans;
  var str = x.toString();
  arr = str.split("");
  if (isNaN(arr[0])) {
    var a = arr.slice(0, 1);
    var b = arr.slice(1, arr.length);
    var c = a.concat(b.reverse());
    ans = c.join("");
  } else if (arr[arr.length - 1] == 0) {
    var d = arr.slice(0, arr.length - 1);
    var e = d.reverse();
    ans = e.join("");
  } else {
    var f = arr.reverse();
    ans = f.join("");
  }
    if (ans < -Math.pow(2, 31) || ans > Math.pow(2, 31) - 1) {
        ans=0;
    }
    
  console.log(ans);
  return ans;
  };
  // @lc code=end
  reverse(-12345);
  reverse(1245);
  reverse(150);