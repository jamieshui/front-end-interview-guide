/**
 * 解法一：二分查找法
 */

function Find(target, array)
{
    // write code here
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] > target) return false;
        if (binarySearch(array[i], 0, array[i].length - 1, target)) return true;
    }
    return false;
}

function binarySearch(array, left, right, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] == target) {
            return true;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}