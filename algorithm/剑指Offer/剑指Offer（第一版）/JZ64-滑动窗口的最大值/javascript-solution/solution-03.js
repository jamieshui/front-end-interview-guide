/**
 * 解法三：双端队列
 * - 双端队列中保存的是元素下标，方便判断元素是否在当前滑动窗口中。
 *   双端队列头元素对应的数字，就是当前滑动窗口的最大值。
 *   代码使用数组来模拟双端队列。
 */

function maxInWindows(num, size)
{
    // write code here
    const length = num.length;
    if (!length || !size || size > length) return [];
    if (size == 1) return num;
    const queue = [];
    for (let i = 0; i < size; i++) {
        cleanQueue(num, queue, i, size);
        queue.push(i);
    }
    const res = [];
    res.push(num[queue[0]]);
    for (let i = size; i < length; i++) {
        cleanQueue(num, queue, i, size);
        queue.push(i);
        res.push(num[queue[0]]);
    }
    return res;
}

function cleanQueue(num, queue, i, size) {
    if (queue.length && i >= size + queue[0]) {
        queue.shift();
    }
    while (queue.length && num[i] > num[queue[queue.length - 1]]) {
        queue.pop();
    }
}