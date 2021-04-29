/**
 * 解法一：开辟新数组
 * - 牺牲空间复杂度来换取时间复杂度。
 */

function multiply(array)
{
    // write code here
    const c1 = [], c2 = [], length = array.length;
    c1[0] = 1;
    for (let i = 0; i < length - 2; i++) {
        c1[i + 1] = c1[i] * array[i];
    }
    c2[length - 1] = 1;
    for (let i = length - 1; i > 1; i--) {
        c2[i - 1] = c2[i] * array[i];
    }
    const ans = [];
    ans[0] = array[1] * c2[1];
    ans[length - 1] = c1[length - 2] * array[length - 2];
    for (let i = 1; i < length - 1; i++) {
        ans[i] = c1[i] * c2[i];
    } 
    return ans;
}