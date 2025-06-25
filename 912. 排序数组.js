/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const quickSort = (left, right) => {
    if (left > right) return;
    let pivot = nums[left];
    let l=left,r=right
    console.log(l, r);
    while (l < r) {
      while (l < r && nums[r] >= pivot) r--;
      nums[l] = nums[r];
      while (l < r && nums[l] <= pivot) l++;
      nums[r] = nums[l];
    }
    nums[l] = pivot;

    quickSort(left, l - 1);
    quickSort(l + 1, right);
  };

  quickSort(0, nums.length - 1);
  return nums;
};

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
console.log(sortArray([-1, 2, -8, -10]));
console.log(sortArray([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]));
console.log(2222);
