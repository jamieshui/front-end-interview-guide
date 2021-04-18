/**
 * 解法二：灵活运用库函数
 */

function FirstNotRepeatingChar(str)
{
    // write code here
    for (const [i, x] of Array.from(str).entries()) {
        if (str.indexOf(x) == str.lastIndexOf(x)) {
            return i;
        }
    }
    return -1;
}