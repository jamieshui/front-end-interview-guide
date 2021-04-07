/**
 * 解法三：贪心规划
 * - 在循环中找到不断找到当前最优的和sum。
 */

function FindGreatestSumOfSubArray(array)
{
    // write code here
    let res = maxSum = array[0];
    for (let i = 1; i < array.length; i++) {
        maxSum = Math.max(array[i], maxSum + array[i]);
        res = Math.max(res, maxSum);
    }
    return res;
}