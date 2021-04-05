/**
 * 解法一：暴力法
 * - 利用sort()库函数直接排序，slice()截取数组排序后的最小k个数。
 */
 function GetLeastNumbers_Solution(input, k)
 {
     // write code here
     if (k > input.length) {
         return [];
     }
     return input.sort((x, y) => (x - y)).slice(0, k); // 数组升序 + 截取数组排序后的最小K个数
 }
 module.exports = {
     GetLeastNumbers_Solution : GetLeastNumbers_Solution
 };