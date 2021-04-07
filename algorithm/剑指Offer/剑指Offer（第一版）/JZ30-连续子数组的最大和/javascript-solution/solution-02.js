/**
 * 解法二：原数组进行动态规划
 * - 优化解法一，无须开辟新数组dp[i]。
 */

function FindGreatestSumOfSubArray(array)
{
    // write code here
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > 0) {
            array[i] += array[i - 1];
        }
        res = Math.max(res, array[i]);
    }
    return res;
}