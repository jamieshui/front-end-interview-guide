/**
 * 解法二：二分法
 * - 观察 left、mid、right 三个指针对应的元素的大小关系，然后移动指针。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const length = nums.length;
    let left = 0, right = length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[left] < nums[right]) return nums[left];
        if (nums[left] < nums[mid]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left++;
        }
    }
    return nums[left];
};