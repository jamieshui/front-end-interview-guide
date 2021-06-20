/**
 * 解法一：贪心算法
 * 
 * 时间复杂度：O(n * logn) 空间复杂度：O(1)
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    const sortFunc = function(a, b) {
        return a - b;
    };
    g.sort(sortFunc);
    s.sort(sortFunc);
    let k = 0;
    s.forEach(n => {
        if (n >= g[k]) {
            k++;
        }
    })
    return k;
};