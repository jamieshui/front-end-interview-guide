/**
 * 解法一：递归
 * - 斐波那契数列。
 */

const dp = [1, 1, 2];

function rectCover(number)
{
    // write code here
    if (!number) return 0;
    if (dp[number]) {
        return dp[number];
    }
    dp[number] = rectCover(number - 1) + rectCover(number - 2);
    return dp[number];
}