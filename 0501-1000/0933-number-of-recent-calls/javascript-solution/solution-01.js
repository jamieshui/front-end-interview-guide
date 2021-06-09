/**
 * 解法一：队列
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * 解题思路：
 * - 有新请求就入队，3000ms前发出的请求出队。
 * - 队列的长度就是最近请求次数。
 */

 var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    while (this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    return this.requests.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */