/**
 * 解法一：分治
 * - 递归。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    if (!pRoot) return 0;
    const leftVal = TreeDepth(pRoot.left);
    const rightVal = TreeDepth(pRoot.right);
    return Math.max(leftVal, rightVal) + 1;
}