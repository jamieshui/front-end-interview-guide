/**
 * 解法一：暴力法
 * - 总的方法数就是所有可能的和。也就是f[n] = f[n-1] + f[n-2] + ... + f[0]。
 *   显然初始条件f[0] = f[1] = 1。
 */

const dp = [0, 1];

function jumpFloorII(number)
{
    // write code here
    if (number == 0 || number == 1) return 1;
    const dp = [];
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= number; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j];
        }
    }
    return dp[number];
}