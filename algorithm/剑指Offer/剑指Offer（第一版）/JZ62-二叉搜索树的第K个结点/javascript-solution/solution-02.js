/**
 * 解法二：优化解法一
 * - 添加剪枝，当遍历到第K小的结点是停止遍历。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    let cnt = 0, res;
    const inOrder = function(node) {
        if (!node) return;
        inOrder(node.left);
        cnt++;
        if (cnt === k) {
            res = node;
            return;
        }
        inOrder(node.right);
    }
    inOrder(pRoot);
    return res;
}
