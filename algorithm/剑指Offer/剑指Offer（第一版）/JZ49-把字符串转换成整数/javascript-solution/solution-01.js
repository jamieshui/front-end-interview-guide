/**
 * 解法一：待优化
 */

function StrToInt(str)
{
    // write code here
    if (!str) return 0;
    let res = 0, flag = 1;
    if (arr[0] === '-') flag = -1;
    for (let i = (str[0] === '+' || str[0] === '-' ? 1 : 0); i < arr.length; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) return 0;
        res += str[i] - '0';
        res *= 10;
    }
    return res * flag;
}