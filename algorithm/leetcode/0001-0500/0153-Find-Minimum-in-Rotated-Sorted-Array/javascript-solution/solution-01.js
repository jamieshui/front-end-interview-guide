/**
 * 解法一：暴力法
 * - 利用 ES6 的 rest 参数，遍历一遍，直接比较找出最小的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return Math.min(...nums);
};