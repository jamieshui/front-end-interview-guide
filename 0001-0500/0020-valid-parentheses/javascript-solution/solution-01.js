/**
 * 解法一：栈模拟
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * 解题思路：
 * - 左括号入栈，右括号出栈，最后栈空了就是合法的。
 * - 利用 Array 模拟实现栈操作。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2) return false; // 判断奇偶性
    const stack = [];
    for (let x of s) {
        if (x === '(' || x === '[' || x === '{') {
            stack.push(x);
        } else {
            let val = stack.pop();
            if (
                (val === '(' && x === ')') ||
                (val === '[' && x === ']') ||
                (val === '{' && x === '}')
            ) {
                continue;
            }
            else return false;
        }
    }
    return stack.length === 0;
};