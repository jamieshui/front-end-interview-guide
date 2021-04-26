/**
 * 解法二：优化递归
 * - 对重复遍历的节点进行剪枝。
 *   改进办法就是在求高度的同时判断是否平衡，如果不平衡就返回-1，否则返回树的高度。
 *   并且当左子树高度为 -1 时，就没必要去求右子树的高度了，可以直接一路返回到最上层了
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    return TreeDepth(pRoot) !== -1;
}

function TreeDepth(node) {
    if (!node) return 0;
    let leftDepth = TreeDepth(node.left);
    if (leftDepth === -1) return -1;
    let rightDepth = TreeDepth(node.right);
    if (rightDepth === -1) return -1;
    return Math.abs(leftDepth - rightDepth) > 1 ? -1 : Math.max(leftDepth, rightDepth) + 1;
}