/**
 * 解法一：递归分治法
 * 
 * 时间复杂度：O(n) 空间复杂度：O(logn ~ n)
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
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if (!root) { return true; }
    const isMirror = (l, r) => {
        if (!l && !r) { return true; }
        if (l && r && l.val === r.val &&
            isMirror(l.left, r.right) &&
            isMirror(l.right, r.left)) {
                return true;
            }
        return false;
    };
    return isMirror(root.left, root.right);
};