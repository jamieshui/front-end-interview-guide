/**
 * 时间复杂度：O(m * n) 空间复杂度：O(m)
 * 
 * - 利用 ES6 的 Set 集合先去重再遍历判断相交元素。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item => nums2.includes(item));
};