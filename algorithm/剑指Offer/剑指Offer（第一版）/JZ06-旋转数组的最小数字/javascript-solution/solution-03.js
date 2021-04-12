/**
 * 解法三：二分法
 * - 对于这种变形的二分查找的考察，解决思路主要都是：观察 left、mid、right 三个指针对应的元素的大小关系，然后移动指针。
 */


function minNumberInRotateArray(rotateArray)
{
    // write code here
    const length = rotateArray.length;
    if (!length) return 0;
    let left = 0, right = length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (rotateArray[left] < rotateArray[right]) return rotateArray[left];
        if (rotateArray[left] < rotateArray[mid]) {
            left = mid + 1;
        } else if (rotateArray[mid] < rotateArray[right]) {
            right = mid;
        } else {
            left++;
        }
    }
    return rotateArray[left];
}