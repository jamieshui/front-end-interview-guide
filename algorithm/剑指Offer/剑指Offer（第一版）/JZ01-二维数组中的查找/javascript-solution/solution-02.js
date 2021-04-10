/**
 * 解法二：观察数组规律
 * - 从每行数组的右上角开始遍历，若 target 大于该元素，则进入下一列；若 target 小于该元素，则尝试从该行前一列查找。
 */

function Find(target, array)
{
    // write code here
    let row = 0, col = array[0].length - 1;
    while (row < array.length && col >= 0) {
        if (array[row][col] == target) {
            return true;
        } else if (array[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
}