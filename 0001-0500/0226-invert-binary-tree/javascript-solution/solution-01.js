/**
 * 解法一：递归分治法
 * 
 * 时间复杂度：O(n) 空间复杂度：O(h ~ n)
 */

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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if (!root) { return null; }
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left)
    };
};