// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

function subsets(arr) {
  const resArr = [];
  const res = [];
  const backtrace = (tempArr, finalArr, arr, start) => {
    finalArr.push([...tempArr]);
    for (let i = start; i < arr.length; i++) {
      tempArr.push(arr[i]);
      backtrace(tempArr, finalArr, arr, i+1);
      tempArr.pop();
    }
  };
  backtrace(resArr, res, arr, 0);
  return res;
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
console.log(111);
