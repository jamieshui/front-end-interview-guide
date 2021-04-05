/**
 * 解法三：最大堆+最小堆
 * - 对于这种动态数据，堆是极好的解决方案。
 */
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

var maxHeap = new Heap();
var minHeap = new Heap((x, y) => (x < y));

function Insert(num)
{
    // write code here
    maxHeap.insert(num);
    minHeap.insert(maxHeap.top());
    maxHeap.extract();
    if (maxHeap.container.length < minHeap.container.length) {
        maxHeap.insert(minHeap.top());
        minHeap.extract();
    }
}
function GetMedian(){
	// write code here
    return maxHeap.container.length > minHeap.container.length
     ? maxHeap.top() 
     : ((maxHeap.top() + minHeap.top()) / 2);
}