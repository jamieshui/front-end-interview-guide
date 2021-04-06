/**
 * 解法一：暴力法
 * - 利用sort()库函数直接排序，slice()截取数组排序后的最小k个数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums.sort((x, y) => (y - x));
    return nums[k - 1];
};