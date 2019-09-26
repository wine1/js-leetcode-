/**
 * @param {number} x
 * @return {number}
 */
// 这样写好像比较复杂，用了大量的变量，后面看看能不能再优化一下，
// js是没有int类型的，但我是为了用js写算法才写算法，所以强行用js实现，后面专门看数据结构的时候可能会再用java写
var reversea = function(x) {
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
  log(ans);
  return ans;
};
reversea(-12345);
reversea(1245);
reversea(150);
