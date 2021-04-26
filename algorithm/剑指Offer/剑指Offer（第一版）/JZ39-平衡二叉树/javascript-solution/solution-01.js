/**
 * 解法一：递归
 * - 获得节点的左子树和右子树的高度，然后比较高度差是否小于1。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if (!pRoot) return false;
    let leftDepth = TreeDepth(pRoot.left);
    let rightDepth = TreeDepth(pRoot.right);
    return Math.abs(leftDepth - rightDepth) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

function TreeDepth(node) {
    if (!node) return 0;
    let leftDepth = TreeDepth(node.left);
    let rightDepth = TreeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}