/**
 * 解法四：分治法
 * - 分治法的做题思路是：先将问题分解为子问题，解决子问题后，再将子问题合并，解决主问题。
 *   在本题中，分治法可行的关键是：最大子序列和只可能出现在左子数组、右子数组、横跨左右子数组这三个情况下。
 */

function __maxSubArray(array, left, right) {
    if (left == right) {
        return array[left];
    }
    let mid = Math.floor((left + right) / 2),
        leftSum = __maxSubArray(array, left, mid),
        rightSum = __maxSubArray(array, mid + 1, right),
        crossSum = crossMaxSum(array, left, right, mid);
    return Math.max(leftSum, rightSum, crossSum);
}

function crossMaxSum(array, left, right, mid) {
    if (left == right) {
        return array[left];
    }
    let leftMaxSum = leftSum = array[mid];
    for (let i = mid - 1; i >= left; i--) {
        leftSum += array[i];
        leftMaxSum = Math.max(leftMaxSum, leftSum);
    }
    let rightMaxSum = rightSum = array[mid + 1];
    for (let i = mid + 2; i <= right; i++) {
        rightSum += array[i];
        rightMaxSum = Math.max(rightMaxSum, rightSum);
    }
    return leftMaxSum + rightMaxSum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return __maxSubArray(nums, 0, nums.length - 1);
};