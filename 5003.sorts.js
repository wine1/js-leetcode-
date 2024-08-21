// Js中的冒泡排序、选择排序、快速排序、桶排序原理
// test [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]

// 1. 冒泡排序 时间复杂度 O(n*n)
const bubbleSort = nums => {
  let len = nums.length
  for (let i = len; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      }
    }
  }
  return nums
}
console.log('bubbleSort', bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]))

// 2. 选择排序  时间复杂度 
// 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
// 从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕。
const selectSort = nums => {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      min = nums[min] > nums[j] ? j : min
    }
    ;[nums[min], nums[i]] = [nums[i], nums[min]]
  }
  return nums
}
console.log('selectSort', selectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]))

// 3. 插入排序 时间复杂度 O(n2)
// 把待排序的数组分成已排序和未排序两部分，初始的时候把第一个元素认为是已排好序的。
// 从第二个元素开始，在已排好序的子数组中寻找到该元素合适的位置并插入该位置。
// 重复上述过程直到最后一个元素被插入有序子数组中。
const insertSort = nums => {
  let len = nums.length
  for (let i = 1; i < len; i++) {
    let temp = nums[i]
    let j = 0
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > temp) {
        nums[j + 1] = nums[j]
      } else {
        break
      }
    }
    nums[j + 1] = temp
  }
  return nums
}
console.log('insertSort', insertSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]))

// 4. 归并排序
// 归并字面上的意思是合并，归并算法的核心思想是分治法，
// 就是将一个数组一刀切两半，递归切，直到切成单个元素，
// 然后重新组装合并，单个元素合并成小数组，两个小数组合并成大数组，
// 直到最终合并完成，排序完毕
const merge = (nums1, nums2) => {
  let res_Num = []
  let len1 = nums1.length,
    len2 = nums2.length
  let idx1 = 0,
    idx2 = 0
  while (idx1 < len1 && idx2 < len2) {
    if (nums1[idx1] < nums2[idx2]) {
      res_Num.push(nums1[idx1])
      idx1 += 1
    } else {
      res_Num.push(nums2[idx2])
      idx2 += 1
    }
  }
  while (idx1 < len1) {
    res_Num.push(nums1[idx1])
    idx1 += 1
  }
  while (idx2 < len2) {
    res_Num.push(nums2[idx2])
    idx2 += 1
  }
  return res_Num
}
const mergeSort = nums => {
  let len = nums.length
  if (len < 2) return nums
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor((left + right) / 2)
  let left_part = mergeSort(nums.slice(left, mid + 1))
  let right_part = mergeSort(nums.slice(mid + 1))
  let res = merge(left_part, right_part)
  return res
}
console.log('mergeSort', mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]))

// 5. 快速排序

const partication = (nums, left, right) => {
  let tmp = nums[left]
  while (left < right) {
    while (left < right && nums[right] >= tmp) right -= 1
    nums[left] = nums[right]
    while (left < right && nums[left] <= tmp) left += 1
    nums[right] = nums[left]
  }
  nums[left] = tmp
  return left
}

const quickSort = (nums, left, right) => {
  if (left > right) return
  let index = partication(nums, left, right)
  quickSort(nums, left, index - 1)
  quickSort(nums, index + 1, right)
}
const sort = nums => {
  quickSort(nums, 0, nums.length - 1)
  return nums
}
console.log('quicksort', sort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]))
console.log(sort([5, 2, 3, 1]))
console.log(sort([5, 1, 1, 2, 0, 0]))
// 6. 堆排序
