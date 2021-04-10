/**
 * 解法一：递归分治
 * - 首先前序/后序遍历 + 中序遍历可以重建二叉树。
 *   题目考察的就是前序+中序来重建二叉树，这与后序+中序的思路是类似的。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if (!pre.length || !vin.length) return null;
    const rootVal = pre[0];
    const node = new TreeNode(rootVal);
    let i = 0; // // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
    for ( ; i < vin.length; i++) {
        if (vin[i] == rootVal) {
            break;
        }
    }
    node.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
    node.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
    return node;
}