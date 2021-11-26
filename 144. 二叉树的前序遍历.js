// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var preorderTraversal = function (root) {
  let res = []
  if (!root) {
    res = []
  } else {
    const dfs = function (node) {
      // console.log(node);
      if (!node) return
      res.push(node.val)
      dfs(node.left)
      dfs(node.right)
    }

    dfs(root)
  }
  return res
}

// 非递归
var preorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = []
  stack.push(root)
  while (stack.length) {
    let root = stack.pop()
    root.val && res.push(root.val)
    root.right && stack.push(root.right)
    root.left && stack.push(root.left)
  }
  return res
}

console.log(preorderTraversal([1, null, 2, 3]))
