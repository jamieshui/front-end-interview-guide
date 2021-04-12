/**
 * 解法一：利用栈的特性
 * - 栈的特性是：后入先出。根据题目提示，使用 2 个栈即可。
 *   一个栈inStack用来存储插入队列的数据，一个栈outStack用来从队列中取出数据。
 */

const inStack = [], outStack = [];

function push(node)
{
    // write code here
    inStack.push(node);
}
function pop()
{
    // write code here
    if (!outStack.length) {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}