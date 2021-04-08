/**
 * 解法二：原数组进行动态规划
 * - 优化解法一，无须开辟新数组dp[i]。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        res = Math.max(res, nums[i]);
    }
    return res;
};