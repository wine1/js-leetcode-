/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function max(a,b) {
    return a>b?a:b;
}
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    let left=maxDepth(root.left);
    let right=maxDepth(root.right);
    return 1+max(left,right);
};

// @lc code=end

console.log(maxDepth([3,9,20,null,null,15,7]))