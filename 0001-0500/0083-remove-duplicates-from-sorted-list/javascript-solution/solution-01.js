/**
 * 空间复杂度：O(n) 时间复杂度：O(n)
 * 
 * - 重复的元素在链表中出现的位置是连续的，因此只需要对链表进行一次遍历，就可以删除重复的元素。
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
 var deleteDuplicates = function(head) {
    let p = head;
    while (p && p.next) {
        if (p.next.val === p.val) p.next = p.next.next;
        else p = p.next;
    }
    return head;
};