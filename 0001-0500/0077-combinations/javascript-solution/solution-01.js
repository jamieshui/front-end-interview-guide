/**
 * 解法一：回溯算法
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const res = [];
    const backtrack = (start, path) => {
        if (path.length === k) {
            res.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            backtrack(i + 1, path.concat(i));
        }
    };
    backtrack(1, []);
    return res;
};