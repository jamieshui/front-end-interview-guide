/**
 * 解法二：观察数组规律
 * - 从每行数组的右上角开始遍历，若 target 大于该元素，则进入下一列；若 target 小于该元素，则尝试从该行前一列查找。
 */

function Find(target, array)
{
    // write code here
    for (let i = 0; i < array.length; i++) {
        if (target == array[i][array[i].length - 1]) {
            return true;
        } else if (target < array[i][array[i].length - 1]) {
            for (let j = array[i].length - 2; j >= 0; j--) {
                if (target == array[i][j]) {
                    return true;
                } else if (target > array[i][j]) {
                    break;
                }
            }
        } else {
            continue;
        }
    }
}