/**
 * 解法一：观察数组规律
 * - 从每行数组的右上角开始遍历，若 target 大于该元素，则进入下一列；若 target 小于该元素，则尝试从该行前一列查找。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};