/**
 * 解法一：递归
 * - 镜像的含义：从上到下，依次交换每个节点的左右节点。
 */

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pRoot TreeNode类 
 * @return TreeNode类
 */
 function Mirror( pRoot ) {
    // write code here
    if (!pRoot) return null;

    let leftCopy = pRoot.left;
    pRoot.left = pRoot.right; 
    pRoot.right = leftCopy;

    Mirror(pRoot.left);
    Mirror(pRoot.right);

    return pRoot;
}
module.exports = {
    Mirror : Mirror
};