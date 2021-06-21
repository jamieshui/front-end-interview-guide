/**
 * 解法二：优化解法一的空间复杂度
 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const backtrack = (start) => {
        if (start === nums.length) {
            res.push(nums.slice());
            return;
        }
        const map = [];
        for (let i = start; i < nums.length; i++) {
            if (map[nums[i]]) { continue; }
            map[nums[i]] = true;
            swap(nums, i, start);
            backtrack(start + 1);
            swap(nums, i, start);
        }
    };
    backtrack(0);
    return res;
};

// test case
// console.log(permuteUnique([1,1,2]));