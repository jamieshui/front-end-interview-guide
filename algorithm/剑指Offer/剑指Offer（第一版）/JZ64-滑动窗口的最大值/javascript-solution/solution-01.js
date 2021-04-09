/**
 * 解法一：暴力法
 * - 直接按size值滑动窗口，每次统计窗口中的最大值。
 */

function maxInWindows(num, size)
{
    // write code here
    if (!size || !num.length) return [];
    if (size == 1) return num;
    const res = [];
    for (let i = 0; i < num.length - size + 1; i++) {
        res.push(Math.max(...num.slice(i, i + size)));
    }
    return res;
}