/**
 * 解法一：回溯算法 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const res = [];
    const used = [];
    nums.sort((a, b) => a - b);
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach((n, i) => {
            if (used[i]) { return; } // 跳过已使用过的数字
            if (i > 0 && n === nums[i - 1] && !used[i - 1]) { return; } // 避免产生重复的排列
            used[i] = true;
            backtrack(path.concat(n));
            used[i] = false;
        });
    };
    backtrack([]);
    return res;
};

