/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let stack = []
  let res = []
  let level = 0
  stack.push([root, level])
  while (stack.length) {
    let [root, level] = stack.splice(0, 1)[0]
    res[level] = (res[level] ? res[level] : []).concat(root.val)
    if (root.left || root.right) {
      root.left && stack.push([root.left, level + 1])
      root.right && stack.push([root.right, level + 1])
    }
  }
  return res
}
// @lc code=end
