
/**
 * 迭代
 * 
 * - 与前序遍历的迭代方法类似，不过前序迭代循环中是：中右左，而后序迭代循环中是：中左右，并将输出数组倒序。
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
 var postorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res.reverse();
};