/**
 * 解法一：递归分治
 * - 首先前序/后序遍历 + 中序遍历可以重建二叉树。
 *   题目考察的是前序 + 中序遍历来重建二叉树，这与后序 + 中序遍历的思路是类似的。
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const rootVal = preorder[0];
    const node = new TreeNode(rootVal);
    let i = 0;
    for ( ; i < inorder.length; i++) {
        if (inorder[i] == rootVal) {
            break;
        }
    }
    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return node;
};