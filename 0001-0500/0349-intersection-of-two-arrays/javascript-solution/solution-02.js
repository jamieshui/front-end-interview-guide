/**
 * 解法二：ES6 中的 Map
 * 
 * 时间复杂度：O(m + n) 空间复杂度：O(m) 
 * 
 * - 用字典建立一个映射关系，记录 nums1 里有的值。
 * - 遍历 nums2 ，遇到字典里的值就选出，并从字典中删除。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
        map.set(n, true);
    });
    const res = [];
    nums2.forEach(n => {
        if (map.get(n)) {
            res.push(n);
            map.delete(n);
        }
    })
    return res;
};