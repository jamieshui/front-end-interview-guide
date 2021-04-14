/**
 * 解法一：数学定义
 * - f(n) = f(n - 1) + f(n - 2)
 *   f(1) = f(0) = 1
 */

const dp = [1, 1];

function jumpFloor(number)
{
    // write code here
    if (dp[number] != undefined) return dp[number];
    dp[number] = jumpFloor(number - 1) + jumpFloor(number - 2);
    return dp[number];
}