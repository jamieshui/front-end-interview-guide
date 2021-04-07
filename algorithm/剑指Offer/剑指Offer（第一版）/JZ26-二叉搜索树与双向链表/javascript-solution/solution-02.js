/**
 * 解法二：非递归（栈模拟）+中序遍历
 * - 用栈来模拟递归调用的过程。
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
    const stack = [];
    let node = pRootOfTree,
        head = null,
        pre = head;
    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const top = stack.pop();
            if (!pre) {
                head = top;
            } else {
                pre.right = top;
            }
            top.left = pre;
            pre = top;
            node = top.right;
        }
    }
    return head;
}