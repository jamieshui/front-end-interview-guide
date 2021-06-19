/**
 * 时间复杂度：O(m + n) 空间复杂度：O(1)
 * 
 * - 新建一个链表，作为返回结果。
 *   用指针遍历两个有序链表，并比较两个链表的当前节点，较小者先接入新链表，并将指针后移一步。
 *   链表遍历结束，返回新链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    const res = new ListNode(0);
    let p1 = l1, p2 = l2, p = res;
    while (p1 && p2) {
        if (p1.val < p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) { p.next = p1; }
    if (p2) { p.next = p2; }
    return res.next;
};