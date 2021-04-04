# 295. 数据流中的中位数 | Find Median from Data Stream

## 考点

排序；堆

## 题目描述

中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。

- double findMedian() - 返回目前所有元素的中位数。

示例：

```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

**进阶**:

1. 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
2. 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？

## 题干分析

- 数据流：一种动态（流动）的数据，如果使用数组存储，每次新进来一个数据都进行排序的话，效率很低。处理动态数据一般使用的数据结构是栈、队列、二叉树、堆。

## 解题思路

### 解法一：暴力法

- **时间复杂度：O(NlogN)**

直接利用sort排序，按照奇偶分别求出中位数。

```js
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
```

>**ATTENTION**
>
>- Javascript sort()方法若没有使用参数，则默认按照字母顺序（字符编码顺序）对数组中的元素进行排序，若想按照其他标准进行排序，则需要提供比较函数：
>
> ```js
> data.sort((a, b) => (a - b));	// 升序
> data.sort((a, b) => (b - a));	// 降序
> ```

### 解法二：二分查找法

- **时间复杂度：O(N)**。
  - 二分查找法的时间复杂度为O(logN)，array.splice()方法移动元素的时间复杂度为O(N)，所以综合的时间复杂度为O(N)。

保证数组元素一直是有序的，对新添加的元素通过**二分查找**来插入到正确位置。

```js
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
```

### 解法三：最大堆+最小堆

- **时间复杂度：O(logN)**

对于这种动态数据，堆是极好的解决方案。

准备两个堆：

- 最大堆：存放数据流中较小的一半数据
- 最小堆：存放数据流中较大的一半数据

保证这两个堆的大小平衡，即：最大堆的大小 = 最小堆的大小，或者最大堆的大小 = 最小堆的大小+1。

当调用findMedian查询中位数时，中位数即为最大堆的堆顶元素，或者（最大堆的堆顶元素+最小堆的堆顶元素）/2。

而保证这两个堆的大小平衡的步骤为：

- 先将num放入maxHeap
- 取出maxHeap的堆顶元素，放入minHeap
- 若此时`最大堆的大小<最小堆的大小`，则取出minHeap的堆顶元素，放入maxHeap中

还需要注意的是，Javascript中没有堆，需要自己实现。

```js
// <-- 堆的实现 start -->
const defaultCmp = (x, y) => (x > y); // 默认是最大堆
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }

    insert(data) {
        const { container, cmp } = this;
        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract() {
        const { container, cmp } = this;
        const length = container.length;
        if (!length) {
            return null;
        }
        swap(container, 0, length - 1);
        container.pop();
        let index = 0, exchange = index * 2 + 1;
        while (exchange < length) {
            let right = index * 2 + 2;
            // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                return;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }
    }

    top() {
        if (this.container.length) {
            return this.container[0];
        }
        return null;
    }
}
// <-- 堆的实现 end -->

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new Heap();
    this.minHeap = new Heap((x, y) => (x < y)); 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.top());
    this.maxHeap.extract();
    if (this.maxHeap.container.length < this.minHeap.container.length) {
        this.maxHeap.insert(this.minHeap.top());
        this.minHeap.extract();
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.maxHeap.container.length > this.minHeap.container.length
        ? this.maxHeap.top()
        : (this.maxHeap.top() + this.minHeap.top()) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

## 关于进阶

1. 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？

   无须建堆，用有效索引为0~100的数组arr记录数据流中某个数据出现的次数。当读取数据流时，计数器cnt记录数据流的当前总个数，以此判断奇偶性；当取中位数时，用cnt除以2得出要找的数的位置p（cnt除以2后JS还需利用Math.floor向下取整），接着遍历数组，p -= arr[0...100]，分别记录p=0和p=-1时的索引i、j，若cnt为奇数，则返回j；若cnt为偶数，则返回(i+j)/2。

2. 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？

   因为99%的数据都在0~100范围内，那么中位数肯定也在0~100范围内，所以思路跟第一问类似，只不过当数据大于100时无须利用数组记录该数据出现的次数，只需要cnt+1记录数据流的当前总个数。

## 参考资料

<https://leetcode-cn.com/problems/find-median-from-data-stream/solution/tu-xie-zheng-li-bao-li-fa-er-fen-cha-zhao-shou-d-2/>

<https://blog.csdn.net/junbujianwpl/article/details/83274026>