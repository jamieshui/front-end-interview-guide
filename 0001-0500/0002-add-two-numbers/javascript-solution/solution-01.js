/**
 * 时间复杂度：O(N) 空间复杂度：O(N)
 * 
 * - 同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。
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
 var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1, p2 = l2, p3 = l3;
    let carry = 0;
    while (p1 || p2) {
        let v1 = p1 ? p1.val : 0; // 等价于 let v1 = (p1 !== null) ? p1.val : 0; 
        let v2 = p2 ? p2.val : 0;
        let sum = v1 + v2 + carry;
        p3.next = new ListNode(sum % 10);
        carry = sum > 9 ? 1 : 0;
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
    }
    if (carry) p3.next = new ListNode(carry);
    return l3.next;
};