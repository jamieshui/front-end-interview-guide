/**
 * 解法二：优化后的暴力法
 * - 利用 ES6 的 rest 参数，遍历一次，直接比较找出最小的元素。
 */

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if (!rotateArray.length) return 0;
    return Math.min(...rotateArray);
}