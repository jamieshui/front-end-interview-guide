/**
 * 解法一：BFS
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * - 在广度优先遍历过程中，记录每个节点的层级，并将其添加到不同的数组中。
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        let len = queue.length;
        res.push([]);
        while (len--) {
            const node = queue.shift();
            res[res.length - 1].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};