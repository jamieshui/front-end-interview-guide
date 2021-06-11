/**
 * 解法一：DFS
 * 
 * 时间复杂度：O(n) 空间复杂度：O(logn ~ n)
 * 
 * - 一直向下找到叶子节点，如果到叶子节点时 sum === targetSum ，则说明找到了一条符合要求的路径。
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let res = false;
    const dfs = (node, sum) => {
        if (!node.left && !node.right && sum === targetSum) {
            res = true;
        }
        if (node.left) dfs(node.left, sum + node.left.val);
        if (node.right) dfs(node.right, sum + node.right.val);
    };
    dfs(root, root.val);
    return res;
};