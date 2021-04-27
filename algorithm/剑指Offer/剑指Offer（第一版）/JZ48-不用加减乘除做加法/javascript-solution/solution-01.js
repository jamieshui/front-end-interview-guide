/**
 * 解法一：位运算
 * - 和 = 非进位和（异或） + 进位（与）
 */

function Add(num1, num2)
{
    // write code here
    while (num2) {
        let tmp = (num1 & num2) << 1;
        num1 ^= num2;
        num2 = tmp;
    }
    return num1;
}