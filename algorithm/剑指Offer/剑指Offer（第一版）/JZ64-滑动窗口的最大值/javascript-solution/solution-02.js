/**
 * 解法二：动态规划
 * - 将数组分成大小相等的块，每个块都可以理解为有两个数组 left 和 right。left 方向从左到右，right 相反。
 *   left[i]是指块从开始到下标 i 的最大元素，right[j]是指块从开始到下标 j 的最大元素。
 *   假设滑动窗口的范围是[i, j]，则滑动窗口中的最大值就是 max(right[i], left[j])。
 */

function maxInWindows(num, size)
{
    // write code here
    const length = num.length;
    if (!length || !size) return [];
    if (size == 1) return num;
    const left = [], right = [];
    left[0] = num[0];
    right[length - 1] = num[length - 1];
    for (let i = 1; i < length; i++) {
        if (i % size) {
            left[i] = Math.max(num[i], left[i - 1]);
        } else {
            left[i] = num[i];
        }
        let j = length - i - 1;
        if (j % size) {
            right[j] = Math.max(num[j], right[j + 1]);
        } else {
            right[j] = num[j];
        }
    }
    const res = [];
    for (let i = 0; i < length - size + 1; i++) {
        res.push(Math.max(right[i], left[i + size - 1]));
    }
    return res;
}