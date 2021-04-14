/**
 * 解法一：数学定义
 * - f(n) = f(n - 1) + f(n - 2)
 */

const dp = [1, 1];

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (dp[n] != undefined) {
        return dp[n];
    }
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2); 
    return dp[n];
};