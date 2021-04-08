/**
 * 解法三：贪心规划
 * - 在循环中不断找到当前最优解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let res = maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxSum = Math.max(nums[i], maxSum + nums[i]);
        res = Math.max(res, maxSum);
    }
    return res;
};