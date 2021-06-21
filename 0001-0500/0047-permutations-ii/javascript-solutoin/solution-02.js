/**
 * 解法二：优化解法一的空间复杂度
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

// test case
console.log(permuteUnique([1,1,2]));