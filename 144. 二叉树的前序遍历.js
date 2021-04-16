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
var preorderTraversal = function (root) {
  let res = [];
  if (!root) {
    res = [];
  } else {
    const dfs = function (node) {
      // console.log(node);
      if (!node) return;
      res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    };

    dfs(root);
  }
  return res;
};
console.log(preorderTraversal([1, null, 2, 3]));
