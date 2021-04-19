/**
 * 解法一：调用库函数
 */

function LeftRotateString(str, n)
{
    // write code here
    if (!str || !str.length) return '';
    n %= str.length;
    return str.slice(n) + str.slice(0, n);
}