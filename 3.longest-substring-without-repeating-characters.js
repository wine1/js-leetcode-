/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = s[0];
    let len = s.length;
    let maxlen = 1;
    let res = 1;
    if (len === 0) {
      return 0;
    }
    for (let i = 1; i < len; i++) {
      if (str.indexOf(s[i]) == -1) {
        str += s[i];
        maxlen++;
      } else {
        let temp = str.indexOf(s[i]) + 1;
        str = str.substr(temp);
        str += s[i];
        maxlen = str.length;
      //   console.log(temp, str);
      }
      res = res > maxlen ? res : maxlen;
      // console.log("str", str, "maxlen", maxlen);
    }
    return res;
  };