/**
 * 解法一：正则表达式匹配
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
    return new RegExp(`^${pattern}$`).test(str);
}
module.exports = {
    match : match
};
