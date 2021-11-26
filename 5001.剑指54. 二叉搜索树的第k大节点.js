// 给定一棵二叉搜索树，请找出其中第k大的节点。

//

// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 二叉搜索树的中序遍历是递减数列
var kthLargest = function (root, k) {
  const res = []
  const order = node => {
    if (!node) return
    else {
      order(node.right)
      res.push(node.val)
      order(node.left)
    }
  }
  order(root, res)
  return res[k - 1]
}
