/**
 * 解法一：中序遍历
 * - 二叉搜索树的中序遍历是从小到大依次排列的。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    const res = [];
    inOrder(pRoot, res);
    return res[k - 1];
}

function inOrder(node, res) {
    if (!node) return;
    inOrder(node.left, res);
    res.push(node);
    inOrder(node.right, res);
}