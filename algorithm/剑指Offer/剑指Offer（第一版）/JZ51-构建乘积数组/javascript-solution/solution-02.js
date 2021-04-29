/**
 * 解法二：优化解法一
 */

function multiply(array)
{
    // write code here
    const ans = [], len = array.length;
    ans[0] = 1;
    for (let i = 1; i < len; i++) {
        ans[i] = ans[i - 1] * array[i - 1];
    }
    let tmp = 1;
    for (let i = len - 2; i >= 0; i--) {
        tmp *= array[i + 1];
        ans[i] *= tmp;
    }
    return ans;
}