/**
 * 解法三：双指针
 * - 遍历完自己的节点后，交换位置继续遍历，最后二者的总步数是一样，相遇时即为所求第一个祖先节点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p1 = pHead1, p2 = pHead2;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : pHead2;
        p2 = p2 ? p2.next : pHead1;
    }
    return p1;
}