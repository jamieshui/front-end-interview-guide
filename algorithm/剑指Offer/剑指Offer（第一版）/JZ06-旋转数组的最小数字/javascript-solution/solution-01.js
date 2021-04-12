/**
 * 解法一：暴力法
 * - 将数组sort升序，直接输出第一个元素。
 */

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if (!rotateArray.length) return 0;
    rotateArray.sort((x, y) => (x - y));
    return rotateArray[0];
}
