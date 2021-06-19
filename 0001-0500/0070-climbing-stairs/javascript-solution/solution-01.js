/**
 * 解法一：动态规划
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n < 2) { return 1; }
    const dp = [1, 1]; // 可优化，无须开辟新数组，见解法二
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};