/**
 * 解法二：层序遍历
 * - 双重循环。
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
    const queue = [];
    queue.push(pRoot);
    let length = 0;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        length++;
    }
    return length;
}