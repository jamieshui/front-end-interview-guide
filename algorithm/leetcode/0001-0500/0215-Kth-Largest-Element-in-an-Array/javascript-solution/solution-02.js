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
    let pivot = array[start];
    while (start < end) {
        while (array[end] < pivot && start < end) {
            end--;
        }
        array[start] = array[end];
        while (array[start] >= pivot && start < end) {
            start++;
        }
        array[end] = array[start];
    }
    array[start] = pivot;
    return start;
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    quickSort(nums, 0, nums.length - 1);
    return nums[k - 1];
};