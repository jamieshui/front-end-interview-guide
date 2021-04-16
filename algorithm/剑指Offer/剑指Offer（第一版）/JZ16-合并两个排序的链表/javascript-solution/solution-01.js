/**
 * 解法一：迭代
 * - 设置一个哨兵节点 preHead。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if (!pHead1) return pHead2;
    else if (!pHead2) return pHead1;

    let preHead = new ListNode(-1); // 哨兵节点
    let node = preHead;

    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            node.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            node.next = pHead2;
            pHead2 = pHead2.next;
        }
        node = node.next;
    }

    if (!pHead1) {
        node.next = pHead2;
    } else if (!pHead2) {
        node.next = pHead1;
    }

    return preHead.next;
}