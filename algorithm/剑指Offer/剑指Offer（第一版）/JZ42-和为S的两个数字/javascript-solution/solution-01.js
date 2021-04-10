/**
 * 解法一：双指针
 * - 使用“双指针”的思路来实现：即一个指针指向开头，另一个指向结尾。
 */

function FindNumbersWithSum(array, sum)
{
    // write code here
    const length = array.length;
    let left = 0, right = length - 1;
    while (left < right) {
        const now = array[left] + array[right];
        if (now == sum) {
            return [array[left], array[right]];
        } else if (now < sum) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}