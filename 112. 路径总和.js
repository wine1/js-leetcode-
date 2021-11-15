// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

// 输入：root = [1,2,3], targetSum = 5
// 输出：false

// 输入：root = [1,2], targetSum = 0
// 输出：false

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
 * @param {number} targetSum
 * @return {boolean}
 */

// 递归
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if (root.left === null && root.right === null) {
    return root.val === targetSum
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

// BFS

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let nodeQue = []
  // 用来存储根节点到这个节点的总和
  let valQue = []

  // 先将根节点入队列
  nodeQue.unshift(root)
  valQue.unshift(root.val)

  while (nodeQue.length) {
    let root = nodeQue.pop()
    let val = valQue.pop()

    if (!root.left && !root.right) {
      if (temp === targetSum) return true
    }

    if (root.left) {
      nodeQue.unshift(root.left)
      valQue.unshift(root.left.val + val)
    }

    if (root.right) {
      nodeQue.unshift(root.right)
      valQue.unshift(root.right.val + val)
    }
  }
  return false
}
