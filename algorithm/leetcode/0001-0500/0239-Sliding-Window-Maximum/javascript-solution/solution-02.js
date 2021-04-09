/**
 * 解法二：双端队列
 * - 双端队列中保存的是元素下标，方便判断元素是否在当前滑动窗口中。
 *   双端队列头元素对应的数字，就是当前滑动窗口的最大值。
 *   代码使用数组来模拟双端队列。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    if (k == 1) return nums;
    const queue = [];
    for (let i = 0; i < k; i++) {
        cleanQueue(nums, queue, i, k);
        queue.push(i);
    }
    const res = [];
    res.push(nums[queue[0]]);
    for (let i = k; i < nums.length; i++) {
        cleanQueue(nums, queue, i, k);
        queue.push(i);  
        res.push(nums[queue[0]]);
    }
    return res;
};

function cleanQueue(nums, queue, i, k) {
    if (queue.length && i >= k + queue[0]) {
        queue.shift();
    }
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
    }
}