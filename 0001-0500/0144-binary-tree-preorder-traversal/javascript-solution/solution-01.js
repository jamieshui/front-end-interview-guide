/**
 * 解法一：迭代栈 （递归解法过于简单故略）
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * 解题思路：
 * - 用栈模拟实现函数递归调用过程。
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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if (!root) return [];
    const stack = [root];
    const res = [];
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
};