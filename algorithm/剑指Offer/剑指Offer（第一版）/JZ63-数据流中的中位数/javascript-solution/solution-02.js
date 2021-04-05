/**
 * 解法二：二分查找法
 * - 保证数组元素一直是有序的，对新添加的元素通过二分查找来插入到正确位置。
 */
 const data = [];
 function Insert(num)
 {
     // write code here
     if (!data.length) {
         data.push(num);
         return;
     }
     // 二分查找法
     let left = 0, right = data.length - 1;
     while (left <= right) {
         let mid = Math.floor((left + right) / 2); // JS中两数相除不会自动化整
         if (data[mid] == num) {
             data.splice(mid, 0, num);
         } else if (data[mid] < num) {
             left = mid + 1;
         } else {
             right = mid - 1;
         }
     }
     data.splice(left, 0, num);
 }
 function GetMedian(){
     // write code here
     const length = data.length;
     if (!length) {
         return null;
     }
     if (length & 1) {
         return data[(length - 1) / 2];
     }
     return (data[length / 2] + data[length / 2 - 1]) / 2;
 }