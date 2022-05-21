/**
 * 解法二：递归 （一年后再刷：我太高估自己了）
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * 解题思路：
 * - 实现函数递归调用过程。
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
    
    const res = [];
    preorder(root, res); // ？似乎不可以用箭头函数简化函数表达式
    return res;
};

function preorder(node, res) {
    if (!node) return;
    res.push(node.val);
    preorder(node.left, res);
    preorder(node.right, res);
}