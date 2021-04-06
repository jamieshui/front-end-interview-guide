/**
 * 解法二： 快速排序
 * - 快速排序的思路：递归取中间的索引进行排序, 比枢纽值小的放左侧, 比枢纽值大的放右侧。
 */
 function quickSort(array, start, end) {
    if (array.length <= 1 || start >= end) {
        return;
    }
    let index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
}

function partition(array, start, end) {
    let pivot = array[start]; // 定义枢纽值
    while (start < end) {
        // 使中间点右侧数据大于枢纽值
        while (array[end] > pivot && start < end) {
            end--;
        }
        array[start] = array[end];
        // 使中间点左侧数据小于等于枢纽值
        while (array[start] <= pivot && start < end) {
            start++;
        }
        array[end] = array[start];
    }
    array[start] = pivot; // 将枢纽值交换到中间点
    return start;
}

function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if (k > input.length) {
        return [];
    }
    quickSort(input, 0, input.length - 1);
    return input.slice(0, k);
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};