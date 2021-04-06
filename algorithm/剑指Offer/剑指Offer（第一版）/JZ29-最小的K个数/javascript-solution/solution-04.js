/**
 * 解法四：归并排序法
 * - 将数组两两分开递归直到只包含一个元素，然后将数组排序合并，最终合并为排序好的数组。
 */
 function mergeSort(array) {
    let length = array.length;
    if (length <= 1) {
        return array;
    }
    let mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
    let res = [],
        leftLength = leftArray.length,
        rightLength = rightArray.length,
        pl = 0,
        pr = 0;
    while (pl < leftLength && pr < rightLength) {
        if (leftArray[pl] < rightArray[pr]) {
            res.push(leftArray[pl++]);
        } else {
            res.push(rightArray[pr++]);
        }
    }
    while (pl < leftLength) {
        res.push(leftArray[pl++]);
    }
    while (pr < rightLength) {
        res.push(rightArray[pr++]);
    }
    return res;
}

 function GetLeastNumbers_Solution(input, k)
 {
     // write code here
     if (k > input.length) {
         return [];
     }
     return mergeSort(input).slice(0, k);
 }
 module.exports = {
     GetLeastNumbers_Solution : GetLeastNumbers_Solution
 };