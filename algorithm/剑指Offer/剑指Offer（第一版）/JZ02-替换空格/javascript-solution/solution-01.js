/**
 * 解法一：正则表达式
 * - 第一反应肯定正则表达式，在真正项目中，肯定也会选用正则来做匹配和替换。
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return string字符串
 */
 function replaceSpace( s ) {
    // write code here
    return s.replace(/ /g, "%20");
}
module.exports = {
    replaceSpace : replaceSpace
};