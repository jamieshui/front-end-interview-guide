/**
 * 解法一：ES6 中的 Map
 * 
 * 时间复杂度：O(m + n) 空间复杂度：O(n)
 * 
 * - 用双指针维护一个滑动窗口。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const map = new Map();
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    let l = 0, r = 0;
    let need = map.size;
    let res = '';
    while (r < s.length) {
        const c = s[r];
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) need--;
        }
        while (need === 0) {
            const newRes = s.substring(l, r + 1);
            if (!res || newRes.length < res.length) res = newRes;
            const c2 = s[l];
            if (map.has(c2)) {
                map.set(c2, map.get(c2) + 1);
                if (map.get(c2) === 1) need++;
            }
            l++;
        }
        r++;
    }
    return res;
};