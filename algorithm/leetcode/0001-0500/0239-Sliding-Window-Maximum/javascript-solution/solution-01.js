/**
 * 此题无法通过暴力法破解。
 * 解法一：动态规划
 * - 将数组分为大小相等的块，每个块都可以理解为有两个数组left和right，left方向从左到右，right相反。
 *   left[i]是指块从开始到下标i的最大元素，right[j]是指块从开始到下标j的最大元素。
 *   假设滑动窗口的范围是[i, j]，则滑动窗口中的最大值就是max(right[i], left[j])。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k == 1) return nums;
    const length = nums.length;
    const left = [], right = [];
    left[0] = nums[0];
    right[length - 1] = nums[length - 1];
    for (let i = 1; i < length; i++) {
        if (i % k) {
            left[i] = Math.max(nums[i], left[i - 1]);
        } else {
            left[i] = nums[i];
        }
        let j = length - i - 1;
        if (j % k) {
            right[j] = Math.max(nums[j], right[j + 1]);
        } else {
            right[j] = nums[j];
        }
    }
    const res = [];
    for (let i = 0; i < length - k + 1; i++) {
        res.push(Math.max(right[i], left[i + k - 1]));
    }
    return res;
};