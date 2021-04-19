/**
 * 解法一：调用库函数
 */

function ReverseSentence(str)
{
    // write code here
    if (!str) return '';
    return str.split(' ').reverse().join(' ');
}