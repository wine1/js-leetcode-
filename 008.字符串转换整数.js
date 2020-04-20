/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
  if (!/^[+|-]?\d+/.test(str)) return 0;
  let res = parseInt(str.match(/^[+|-]?\d+/));
  let base = Math.pow(2,31)
  let min = -base;
  let max = base-1;
  return Math.max(Math.min(res, max), min)
};