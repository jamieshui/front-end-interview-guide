/**
 * 解法一：循环计算
 * - 根据数学定义：f(n) = f(n - 1) + f(n - 2)。最初始情况是f(0) = 0和f(1) = 1。
 */

function Fibonacci(n)
{
    // write code here
    if (n == 0 || n == 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a + b;
}