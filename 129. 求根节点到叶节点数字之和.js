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
 * @return {number}
 */
const dfs = (root, num) => {
  if (!root) return 0
  if (!root.left && !root.right) {
    num = num * 10 + root.val
    return num
  } else {
    num = num * 10 + root.val
    return dfs(root.left, num) + dfs(root.right, num)
  }
}
var sumNumbers = function (root) {
  if (!root) return
  return dfs(root, 0, 0)
}
