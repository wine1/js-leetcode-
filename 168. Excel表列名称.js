// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 例如，

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = "";
    if (n == 0) {
      return res;
    } else {
      while (n !== 0) {
        //因为是1开头 转为26进制要从0开始
        n = n - 1;
        //余数
        temp = n % 26;
        // 重新计算n
        n = Math.floor(n / 26);
        res = String.fromCharCode(temp + 65) + res;
      }
  
      return res;
    }
  };