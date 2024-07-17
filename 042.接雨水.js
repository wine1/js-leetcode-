/**
 * @param {number[]} height
 * @return {number}
 */

//  暴力解法 超时 时间复杂度 O(n*n)
var trap = function (height) {
  let save = new Array();
  let res = 0;
  let len = height.length;
  save[0] = 0;
  save[len] = 0;
  for (let i = 1; i < len; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    for (let j = 0; j < len; j++) {
      if (j < i) {
        maxLeft = maxLeft < height[j] ? height[j] : maxLeft;
      } else if (j > i) {
        maxRight = maxRight < height[j] ? height[j] : maxRight;
      }
      save[i] = maxLeft < maxRight ? maxLeft : maxRight;
    }
    if (save[i] > height[i]) {
      res = res + (save[i] - height[i]);
    }
  }
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([2, 0, 2]));



var trap = function (height) {
  let max = 0;
  let volumn = 0;
  const leftMax = [];
  const rightMax = [];

  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max = Math.max(height[i], max);
  }

  max = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = max = Math.max(height[i], max);
  }

  for (let i = 0; i < height.length; i++) {
    volumn = volumn + Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return volumn;
};

