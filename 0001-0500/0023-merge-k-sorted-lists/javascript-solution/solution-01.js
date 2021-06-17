/**
 * 解法一：最小堆
 * 
 * 时间复杂度：O(n * logk) 空间复杂度：O(k)
 * 
 * - 新链表的下一个节点一定是 K 个链表头中的最小节点。
 * 
 *   构建一个最小堆，构建一个最小堆，并依次把链表头插入堆中。
 *   弹出堆顶接到输出链表，并将堆顶所在链表的新链表头插入堆中。
 *   等堆元素全部弹出，合并工作就完成了。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 class MinHeap{
    constructor() {
      this.heap = []
    }
    // 替换两个节点值
    swap(i1,i2){
      const temp = this.heap[i1];
      this.heap[i1] = this.heap[i2];
      this.heap[i2] = temp;
    }
    // 获取父节点
    getParentIndex(i) {
      return (i - 1) >> 1; //求除2的商
    }
    // 获取左节点
    getLeftIndex(i) {
      return i * 2 + 1; //求除2的商
    }
    // 获取右节点
    getRightIndex(i) {
      return i * 2 + 2; //求除2的商
    }
    // 上移
    shiftUp(index) {
      if(index == 0) {return;}
      const parentIndex = this.getParentIndex(index);
      if(this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex,index);
        this.shiftUp(parentIndex);
      }
    }
    // 下移
    shiftDown(index) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if(this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
        this.swap(leftIndex,index);
        this.shiftDown(leftIndex);
      }
      if(this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
        this.swap(rightIndex,index);
        this.shiftDown(rightIndex);
      }
    }
    // 插入
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
    // 删除堆顶
    pop() {
      if (this.heap.length === 1) return this.heap.shift();
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return top;
    }
    // 获取堆顶
    peek() {
      return this.heap[0];
    }
    // 获取堆的大小
    size() {
      return this.heap.length;
    }
  }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new MinHeap();
    lists.forEach(list => {
        if (list) h.insert(list);
    })
    while (h.size()) {
        const n = h.pop();
        p.next = n;
        p = p.next;
        if (n.next) h.insert(n.next);
    }
    return res.next;
};