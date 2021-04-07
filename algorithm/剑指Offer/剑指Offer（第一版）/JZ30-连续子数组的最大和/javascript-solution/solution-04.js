/**
 * 解法四：分治法
 * - 分治法的做题思路是：先将问题分解为子问题；解决子问题后，再将子问题合并，解决主问题。
 *   在本题中，分治法可行的关键的是：最大子序列和只可能出现在左子数组、右子数组或横跨左右子数组 这三种情况下。
 */

function maxSubArray(array, left, right) {
    if (left == right) {
        return array[left];
    }
    const mid = Math.floor((left + right) / 2);
    const leftSum = maxSubArray(array, left, mid);
    const rightSum = maxSubArray(array, mid + 1, right);
    const crossSum = crossMaxSum(array, left, right, mid);
    return Math.max(leftSum, rightSum, crossSum);
}

function crossMaxSum(array, left, right, mid) {
    if (left == right) {
        return array[left];
    }
    let leftMaxSum = Number.MIN_SAFE_INTEGER,
        leftSum = 0;
    for (let i = mid; i >= left; i--) {
        leftSum += array[i];
        leftMaxSum = Math.max(leftMaxSum, leftSum);
    }
    let rightMaxSum = Number.MIN_SAFE_INTEGER,
        rightSum = 0;
    for (let i = mid + 1; i <= right; i++) {
        rightSum += array[i];
        rightMaxSum = Math.max(rightMaxSum, rightSum);
    }
    return leftMaxSum + rightMaxSum;
}

function FindGreatestSumOfSubArray(array)
{
    // write code here
    return maxSubArray(array, 0, array.length - 1);
}
