/**
 * 解法一：ES6 中的 Map
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * - 遍历到数字 n1 时，用 target 减去 n1，就会得到 n2，
 * - 若 n2 存在于哈希表中，则可以直接返回结果。
 * - 若 n2 不存在，那么需要将 n1 存入哈希表，好让后续遍历的数字使用。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        let n2 = target - nums[i];
        if (map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n1, i);
        }
    }
};