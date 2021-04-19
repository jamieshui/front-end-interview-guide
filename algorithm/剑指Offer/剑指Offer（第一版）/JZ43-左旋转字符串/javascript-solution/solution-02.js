/**
 * 解法二：分治
 */

function LeftRotateString(str, n)
{
    // write code here
    if (!str || !str.length) return '';
    n %= str.length;

    let l = r = '';
    for (let ch of str) {
        n-- > 0 ? r += ch : l += ch;
    }

    return l + r;
}