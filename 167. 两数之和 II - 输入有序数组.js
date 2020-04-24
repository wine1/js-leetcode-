/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum2 = function(numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i+1,j+1];
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
};

log(twoSum2([1, 3, 5, 2, 7, 11, 15], 9),"leetcode验证通过");
