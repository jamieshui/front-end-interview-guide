/**
 * 解法一：动态规划
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 0) { return 0; }
    const dp = [0, nums[0]]; // 可优化，无须开辟新数组，详见解法二
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    }
    return dp[nums.length];
};