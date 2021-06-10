/**
 * 解法二：ES6 中的 Map
 * 
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 
 * - 左括号入栈，右括号出栈，最后栈空了就是合法的。
 * - Map 建立字典，简化代码。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2) return false;
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    const stack = [];
    for (let x of s) {
        if (map.get(x)) {
            stack.push(x);
        } else {
            if (map.get(stack.pop()) !== x) return false;
        }
    }
    return stack.length === 0;
};

