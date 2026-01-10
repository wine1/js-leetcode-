function permute(arr) {
  const res = [];
  const len = arr.length;
  if (!len) return res;
  const resArr = [];
  backTrace(resArr, res);
  function backTrace(resArr, res) {
    if (resArr.length === len) {
      res.push([...resArr]);
      return;
    }
    for (let i = 0; i < len; i++) {
        if(resArr.indexOf(arr[i]) !== -1) continue
      resArr.push(arr[i]);
      backTrace(resArr, res);
      resArr.pop();
    }
  }
  return res;
}
console.log(permute([1, 2, 3]));
console.log(1111);
// [
//   ([1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1])
// ];
// 回溯的核心
// backtrack(路径,选择列表) {
// if(满足结束条件) 
//     将路径加入结果集
//     return
// for(选择 in 选择列表)
//     if(不满足约束条件) continue // 剪枝
//     做选择 //将选择加入路径
//     回溯 backtrack(新的路径, 新的选择列表)  // 递归
//     撤销选择 //回溯的关键：恢复到之前状态
// }
