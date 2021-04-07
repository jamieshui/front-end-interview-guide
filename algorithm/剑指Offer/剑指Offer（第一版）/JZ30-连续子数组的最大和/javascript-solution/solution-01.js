/**
 * 解法一：动态规划
 * - 定义状态数组dp[i]的含义：数组中元素下标为[0, i]的连续子数组最大和。
 */
function FindGreatestSumOfSubArray(array)
{
    // write code here
    const dp = [];
    let res = dp[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        dp[i] = array[i];
        if (dp[i - 1] >= 0) {
            dp[i] += dp[i - 1];
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}