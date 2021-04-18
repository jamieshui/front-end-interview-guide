/**
 * 解法一：使用哈希表存储频数
 * - 在第一次遍历时，我们使用哈希映射统计出字符串中每个字符出现的次数。
 *   在第二次遍历时，我们只要遍历到了一个只出现一次的字符，那么就返回该字符，否则在遍历结束后返回空格。
 */

function FirstNotRepeatingChar(str)
{
    // write code here
    const hash = [];
    for (let x of str) {
        hash[x] ? hash[x]++ : hash[x] = 1;
    }
    for (const [i, ch] of Array.from(str).entries()) {
        if (hash[ch] == 1) {
            return i;
        }
    }
    return -1;
}