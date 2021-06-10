/**
 * 解法一：ES6 中的 Map
 * 
 * 时间复杂度：O(n) 空间复杂度：O(m)
 * 
 * - 双指针维护一个滑动窗口用于剪切子串，不断移动右指针，当遇到重复字符时，左指针则移动到重复字符下一位。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0, res = 0;
    const map = new Map();
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
};