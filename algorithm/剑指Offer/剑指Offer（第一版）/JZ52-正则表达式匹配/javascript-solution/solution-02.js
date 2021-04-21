/**
 * 解法二：递归
 * - 1. 特判，同时也是递归出口，如果 pattern 是空串，返回 str 是否为空串。
 *   2. 假如 pattern[1] !== '*'，如果 pattern[0] 不匹配 str[0]，返回 false ，否则递归判断 str.slice(1) 和 pattern.slice(1)。
 *   3. 假如 pattern[1] === '*'，可以尝试两种情况：
 *      1). 递归比较 str 和 pattern.slice(2)；
 *      2). 当 str[0] 可以匹配 pattern[0] 时，尝试递归比较 str.slice(1) 和 pattern。
 *          值得注意的是，这里没有必要比较 str.slice(1) 和 pattern.slice(2)，因为这种情况已经包含在 str.slice(1) 和 pattern 的递归比较中了。
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @param pattern string字符串 
 * @return bool布尔型
 */
 function match( str ,  pattern ) {
    // write code here
    if (!pattern.length) return !str.length;
    if (pattern[1] === '*') {
        return match(str, pattern.slice(2)) 
            || (str.length && (str[0] === pattern[0] || pattern[0] === '.'))
            && match(str.slice(1), pattern);
    } else {
        return str.length
            && (str[0] === pattern[0] || pattern[0] === '.')
            && match(str.slice(1), pattern.slice(1));
    }
}
module.exports = {
    match : match
};