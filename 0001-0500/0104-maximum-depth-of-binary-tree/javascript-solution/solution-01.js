/**
 * 解法一：DFS
 * 
 * 时间复杂度：O(n) 空间复杂度：O(logn ~ n)
 * 
 * - 递归计算出其左子树和右子树的最大深度，比较后取最大值。
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
 * @return {number}
 */
 var maxDepth = function(root) {
    let res = 0;
    const dfs = (root, depth) => {
        if (!root) return;
        if (!root.left && !root.right) {
            res = Math.max(res, depth);
        }
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    dfs(root, 1);
    return res;
};