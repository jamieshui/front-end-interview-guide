/**
 * 解法三：堆排序
 * - 先构建->后逆序->取堆顶->再构建
 */

 const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

 class Heap {
     constructor(cmp) {
         this.container = [];
         this.cmp = cmp;
     }
     insert(data) {
         const { container, cmp } = this;
         container.push(data);
         let index = container.length - 1;
         while (index) {
             let parent = Math.floor((index - 1) / 2);
             if (!cmp(container[index], container[parent])) {
                 return;
             }
             swap(container, index, parent);
             index = parent;
         }
     }
     extract() {
         const { container, cmp } = this;
         const length = container.length;
         if (!length) {
             return null;
         }
         swap(container, 0, length - 1);
         const res = container.pop();
         let index = 0, exchange = index * 2 + 1;
         while (exchange < length) {
             let right = index * 2 + 2;
             if (right < length && cmp(container[right], container[exchange])) {
                 exchange = right;
             }
             if (!cmp(container[exchange], container[index])) {
                 break;
             }
             swap(container, exchange, index);
             index = exchange;
             exchange = index * 2 + 1;
         }
         return res;
     }
 }
 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var maxHeap = new Heap((x, y) => (x > y));
    for (let i = 0; i < nums.length; i++) {
        maxHeap.insert(nums[i]);
    }
    for (let i = 0; i < k - 1; i++) {
        maxHeap.extract();
    }
    return maxHeap.extract();
};