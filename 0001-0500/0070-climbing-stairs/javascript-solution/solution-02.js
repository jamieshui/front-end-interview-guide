/**
 * 解法二：优化解法一的空间复杂度
 * 
 * 时间复杂度：O(n) 空间复杂度：O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n < 2) { return 1; }
    dp0 = 1;
    dp1 = 1;
    for (let i = 2; i <= n; i++) {
        let tmp = dp0;
        dp0 = dp1;
        dp1 = dp1 + tmp;
    }
    return dp1;
};