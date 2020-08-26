/**
 * @param {number[]} height
 * @return {number}
 */

//  暴力解
// var maxArea = function(height) {
//   let MaxRes = 0;
//   len = height.length;
//   let res = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       let area = Math.min(height[i], height[j]) * (j - i);
//       res = res > area ? res : area;
//     }
//     MaxRes = MaxRes > res ? MaxRes : res;
//   }
//   return MaxRes
// };
// 双指针解法 时间复杂度急剧降低
let maxArea = function(height) {
  len = height.length;
  let leftPoint = 0;
  let rightPoint = len - 1;
  let maxRes = 0;
  while (leftPoint !== rightPoint) {
    let area =
      Math.min(height[leftPoint], height[rightPoint]) *
      (rightPoint - leftPoint);
    maxRes = maxRes > area ? maxRes : area;
    if (height[leftPoint] < height[rightPoint]) {
      leftPoint++;
    } else {
      rightPoint--;
    }
    // console.log(leftPoint, rightPoint, area, maxRes);
  }
  return maxRes;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
