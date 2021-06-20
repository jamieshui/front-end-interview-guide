/**
 * 解法一：回溯算法
 * 
 * 时间复杂度：O(n!) 空间复杂度：O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach(n => {
            if (path.includes(n)) { return; }
            backtrack(path.concat(n));
        });
    };
    backtrack([]);
    return res;
};