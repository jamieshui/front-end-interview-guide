/**
 * 解法二：回溯剪枝
 * - 优化解法一，剪枝剪去了不必要的递归遍历，减少时间开销。
 *   在每次的遍历中，使用数组 map 来记录元素是否被使用过，如果使用过，那么说明是重复元素，直接跳过。
 */

const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

function Permutation(str)
{
    // write code here
    if (!str.length) return null;
    const res = [];
    __permutation(str.split(""), 0, res);
    res.sort();
    return res;
}

function __permutation(str, start, res) {
    if (start == str.length) {
        res.push(str.join(""));
        return;
    }
    const map = [];
    for (let i = start; i < str.length; i++) {
        if (map[str[i]]) continue;
        map[str[i]] = true;
        swap(str, i, start);
        __permutation(str, start + 1, res);
        swap(str, i, start);
    }
}

