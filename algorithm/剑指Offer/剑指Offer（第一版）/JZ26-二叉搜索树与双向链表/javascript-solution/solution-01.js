/**
 * 解法一：递归+中序遍历
 * - 结合中序遍历，递归处理二叉树。初始化一个代表上一个节点的 pre 变量。
 *   递归中要做的就是：pre 的 right 指针指向当前节点 node，node 的 left 指向 pre，并且将 pre 更新为 node。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if (!pRootOfTree) {
        return;
    }
    let head = null, // 定义头指针
        pre = head; // 定义指向当前节点的指针
    inorder(pRootOfTree);
    return head;
    
    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left); // 遍历左子树
        // 处理当前节点
        if (!pre) {
            head = node;
        } else {
            pre.right = node;
        }
        node.left = pre;
        pre = node;
        inorder(node.right); // 遍历右子树
    }
}