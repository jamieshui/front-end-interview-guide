/**
 * 解法一：回溯算法
 * 
 * - 时间复杂度：O(n!) backtrack 调用函数的次数。
 *   空间复杂度：O(n) 其中 n 为序列的长度。除 res 答案数组以外，递归函数在递归过程中需要为每一层递归函数分配栈空间，所以这里需要额外的空间且该空间取决于递归的深度，这里可知递归调用深度为 O(n)。
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

// test case
// console.log(permute([1,2,3]));