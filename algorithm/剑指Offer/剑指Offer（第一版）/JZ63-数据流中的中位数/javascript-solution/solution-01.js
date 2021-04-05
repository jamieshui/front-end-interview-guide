/**
 * 解法一：暴力法
 * - 直接利用sort排序，按照奇偶分别求出中位数。
 */
const data = [];
function Insert(num)
{
    // write code here
    data.push(num);
}
function GetMedian(){
	// write code here
    const length = data.length;
    if (!length) {
        return null;
    }
    data.sort((a , b) => (a - b)); // 避免数据流中的空数据影响数值排序
    if (length & 1) { //此处判断奇偶可用位运算符，提高运算性能
        return data[(length - 1) / 2];
    }
    return (data[length / 2] + data[length / 2 - 1]) / 2;
}