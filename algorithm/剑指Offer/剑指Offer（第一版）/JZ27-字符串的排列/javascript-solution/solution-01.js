/**
 * 解法一：回溯+集合去重
 * - 利用回溯法，拿到解空间上的所有结果。
 *   由于原字符串可能会有重复元素，例如 aab，所有可以借助 ES6 中 Set 来过滤重复元素，并返回过滤后的结果。
 */

const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

function Permutation(str)
{
    // write code here
    if (!str.length) return null;
    const res = [];
    __permutation(str.split(""), 0, res);
    res.sort();
    return Array.from(new Set(res));
}

function __permutation(str, start, res) {
    if (start == str.length) {
        res.push(str.join(""));
        return;
    }
    for (let i = start; i < str.length; i++) {
        swap(str, i, start);
        __permutation(str, start + 1, res);
        swap(str, i, start);
    }
}