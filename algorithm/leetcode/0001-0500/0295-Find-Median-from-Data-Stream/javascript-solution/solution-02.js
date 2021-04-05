/**
 * 解法二：二分查找法
 * - 保证数组元素一直是有序的，对新添加的元素通过二分查找来插入到正确位置。
 */
/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.data = []; 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.data.length) {
        this.data.push(num);
        return;
    }
    let left = 0, right = this.data.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.data[mid] == num) {
            this.data.splice(mid, 0, num);
            return;
        } else if (this.data[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.data.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const length = this.data.length;
    if (!length) {
        return null;
    }
    if (length & 1) {
        return this.data[(length - 1) / 2];
    }
    return (this.data[length / 2] + this.data[length / 2 - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
