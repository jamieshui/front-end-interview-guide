/**
 * 解法二：快慢指针
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let node = pHead1, p1Len = 0;
    while (node) {
        p1Len++;
        node = node.next;
    }
    node = pHead2;
    let p2Len = 0;
    while (node) {
        p2Len++;
        node = node.next;
    }
    let diff, slow, fast;
    if (p1Len > p2Len) {
        diff = p1Len - p2Len;
        slow = pHead1;
        fast = pHead2;
    } else {
        diff = p2Len - p1Len;
        slow = pHead2;
        fast = pHead1;
    }
    while (diff--) {
        slow = slow.next;
    }
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
