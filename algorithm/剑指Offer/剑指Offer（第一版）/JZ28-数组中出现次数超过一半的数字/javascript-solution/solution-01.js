/**
 * 解法一：哈希表
 */

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    const hash = [];
    for (let x of numbers) {
        hash[x] ? hash[x]++ : hash[x] = 1;
        if (hash[x] > numbers.length >> 1) {
            return x;
        }
    }
    return 0;
}