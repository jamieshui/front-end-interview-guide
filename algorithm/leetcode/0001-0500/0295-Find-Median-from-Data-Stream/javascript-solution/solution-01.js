/**
 * 解法一：暴力法
 * - 直接利用sort排序，按照奇偶分别求出中位数。
 */
var MedianFinder = function() {
    this.data = [];
};

MedianFinder.prototype.addNum = function(num) {
    this.data.push(num);
};

MedianFinder.prototype.findMedian = function() {
    const length = this.data.length;
    if (!length) {
        return null;
    }
    this.data.sort((a, b) => a - b);

    const mid = Math.floor((length - 1) / 2);
    if (length % 2) {
        return this.data[mid];
    }
    return (this.data[mid] + this.data[mid + 1]) / 2;
};