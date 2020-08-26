/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */ 
// hard 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

 
 var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const { length } = arr;
    return length % 2
      ? arr[Math.floor(length / 2)]
      : (arr[length / 2] + arr[length / 2 - 1]) / 2;
  };
  
  
  console.log(findMedianSortedArrays([1, 3], [2]));//2
  console.log(findMedianSortedArrays([1, 2], [3, 4, 5]));//3
  console.log(findMedianSortedArrays([3], [-2, -1]));//01