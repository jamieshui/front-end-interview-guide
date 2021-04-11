/**
 * 解法二：递归+动态规划
 * - 根据数学定义：f(n) = f(n - 1) + f(n - 2)，代码可以实现为递归形式。
 *   当要求的 n 越大的时候，重复计算就会越多，时间复杂度就会越高。
 *   可用动态规划来实现结果的缓存，避免重复计算。
 */

const dp = [0, 1];

function Fibonacci(n)
{
    // write code here
    if (dp[n] != undefined) {
        return dp[n];
    }
    dp[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
    return dp[n];
}