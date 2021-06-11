/**
 * 解法一：最小堆
 * 
 * 时间复杂度：O(n * logk) 空间复杂度：O(k)
 * 
 * - 构建一个最小堆，并依次把数组的值插入堆中。
 *   当堆的容量超过 K，就删除堆顶。
 *   插入结束后，堆顶就是第 K 个最大元素。
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
      if(this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex,index);
        this.shiftUp(parentIndex);
      }
    }
    // 下移
    shiftDown(index) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if(this.heap[leftIndex] < this.heap[index]) {
        this.swap(leftIndex,index);
        this.shiftDown(leftIndex);
      }
      if(this.heap[rightIndex] < this.heap[index]) {
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
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();
    nums.forEach(n => {
        minHeap.insert(n);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    });
    return minHeap.peek();
};