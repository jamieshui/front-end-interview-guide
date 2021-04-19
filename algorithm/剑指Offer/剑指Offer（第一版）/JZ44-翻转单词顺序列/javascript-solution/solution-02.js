/**
 * 解法二：双指针实现库函数reverse()功能
 */

function ReverseSentence(str)
{
    // write code here
    if (!str) return '';
    const reverse = array => {
        const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];
        let left = 0, right = array.length - 1;
        while (left < right) {
            swap(array, left++, right--);
        }
        return array;
    }
    return reverse(str.split(' ')).join(' ');
}