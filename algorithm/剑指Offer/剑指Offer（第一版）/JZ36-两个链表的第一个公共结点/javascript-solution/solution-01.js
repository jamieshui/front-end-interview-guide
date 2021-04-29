/**
 * 解法一：哈表表
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    const map = new Map();
    let node = pHead1;
    while (node) {
        map.set(node, true);
        node = node.next;
    }
    node = pHead2;
    while (node) {
        if (map.has(node)) {
            return node;
        }
        node = node.next;
    }
    return null;
}