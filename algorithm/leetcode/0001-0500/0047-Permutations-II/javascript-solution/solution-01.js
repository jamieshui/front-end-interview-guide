/**
 * 解法一：回溯剪枝
 * - 利用回溯法，拿到解空间上的所有结果，而剪枝剪去了不必要的递归遍历，减少时间开销。
 *   在每次的遍历中，使用数组 map 来记录元素是否被使用过，如果使用过，那么说明是重复元素，直接跳过。
 */

 const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums.length) return null;
    const res = [];
    permutation(nums, 0, res);
    return res;
};

function permutation(nums, start, res) {
    if (start == nums.length) {
        res.push(nums.slice()); // 拷贝nums
        return;
    }
    const map = [];
    for (let i = start; i < nums.length; i++) {
        if (map[nums[i]]) continue;
        map[nums[i]] = true;
        swap(nums, i, start);
        permutation(nums, start + 1, res);
        swap(nums, i, start);
    }
}