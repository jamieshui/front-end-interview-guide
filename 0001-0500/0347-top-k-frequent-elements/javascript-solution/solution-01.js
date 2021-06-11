/**
 * 解法一：ES6 中的 Map （不符合题意）
 * 
 * 时间复杂度：O(n * logn) 空间复杂度：O(n)
 * 
 * - 先统计数组每个元素的出现频率，再将其降序取前 K 个高频元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const list = Array.from(map).sort((a, b) => b[1] - a[1]);
    return list.slice(0, k).map(n => n[0]);
};