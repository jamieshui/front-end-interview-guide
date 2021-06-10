/**
 * 解法一：迭代
 * 
 * 时间复杂度：O(n) 空间复杂度：O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head) return [];
    let p1 = null, p2 = head;
    while (p2) {
        let tmp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = tmp;
    }
    return p1;
};